import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from '@mui/icons-material/Delete';
import styles from "./styles.module.css"

export default function PostCard(props) {
  const {content, title, createdAt, id, onDelete, onLike, likesCount} = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={createdAt}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <div className={styles.actionsDiv}>
        <IconButton className={styles.actionBtn} aria-label="add to favorites">
          <FavoriteIcon onClick={() => onLike(id)} sx={{ color: red[likesCount > 0 ? 500 : 0] }} /> <span>{likesCount ? likesCount : ''}</span>
        </IconButton>
        <IconButton className={styles.actionBtn} onClick={() => onDelete(id)}  aria-label="add to favorites">
          <DeleteIcon />
        </IconButton>
      </div>
    </Card>
  );
}
