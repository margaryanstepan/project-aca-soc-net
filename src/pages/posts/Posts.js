import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import PostCard from "./PostCard";
import { v4 as uuidv4 } from "uuid";
import Snackbar from "@mui/material/Snackbar";
import { useAuth } from "../../hook/useAuth";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./styles.module.css"
import Grid from '@mui/material/Grid';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [postsList, setPostsList] = useState([]);
  const { user } = useAuth();

  console.log(user);

  const [formData, setFormData] = useState({
    id: null,
    title: null,
    content: null,
    createdAt: null,
    likes: [],
  });

  const fetchPosts = () => {
    fetch("http://localhost:8000/posts")
      .then((res) => res.json())
      .then((res) => {
        setPostsList(res);
      });
  };

  /**
   * This function deletes the post by specified id
   * Example is https://localhost:8000/post/12
   * In this case, Post with id 12 will be deleted
   */
  const deletePostById = (id) => {
    setPostsList(postsList.filter((post) => post.id != id));

    fetch(`http://localhost:8000/posts/${id}`, {
      method: "DELETE",
    });
  };

  const addLike = (postId) => {
    const p = postsList.find((post) => post.id === postId);

    console.log(p.likes, p.likes.includes(user.id));
    if (p.likes.includes(user.id) === false) {
      p.likes.push(user.id);

      fetch("http://localhost:8000/posts/" + postId, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(p),
      });
    }

    setPostsList(
      postsList.map((post) => {
        if (post.id == postId && post.likes.includes(user.id) === false) {
          post.likes.push(user.id);
        }

        return post;
      })
    );
  };

  const createPost = (data) => {
    data.id = uuidv4();
    data.likes = [];

    fetch("http://localhost:8000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    });

    setOpen(false); // to close the modal
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const onChange = (e) => {
    const input = e.currentTarget;

    setFormData({
      ...formData,
      [input.name]: input.value,
    });
  };

  const onPublish = (e) => {
    e.preventDefault();

    const isTitleValid = formData.title || formData.title?.trim().length >= 1;
    const isContentValid =
      formData.content || formData.content?.trim().length >= 1;

    if (!isTitleValid || !isContentValid) {
      setSnackOpen(true);
      return false;
    }

    formData.createdAt = new Date().toISOString().split("T")[0];

    setPostsList([...postsList, formData]);

    createPost(formData);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Add post</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon onClick={handleClose} className={styles.modalCloseIcon} />
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Title of your post"
              color="secondary"
              focused
              name="title"
              onChange={onChange}
            />
            <TextField
              label="Content"
              color="secondary"
              focused
              name="content"
              onChange={onChange}
            />
            <Button variant="contained" onClick={onPublish}>
              Publish
            </Button>
          </Box>
        </Box>
      </Modal>

      <Snackbar
        open={snackOpen}
        autoHideDuration={6000}
        onClose={() => setSnackOpen(false)}
        message="Խնդրում ենք լրացնել բոլոր դաշտերը."
      />

        <Grid container spacing={2}>
            {postsList.map((post) => {
            return (<Grid item xs={4}>
                <PostCard
                id={post.id}
                content={post.content}
                title={post.title}
                createdAt={post.createdAt}
                likesCount={post.likes.length}
                onDelete={deletePostById}
                onLike={addLike}
                />
                </Grid>
            );
            })}
      </Grid>
    </div>
  );
}
