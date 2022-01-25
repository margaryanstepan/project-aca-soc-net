const styles = {
    users_container: {
        display: 'grid',
        height: '900px',
        gridTemplateAreas:
        `'users_list users_filter'`,
        gridTemplateColumns: '5fr 1fr'
    },
    users_filter: {
        gridArea: 'users_filter'
    },
    users_list: {
        display: 'grid',
        gridArea: 'users_list',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gridRowGap: '6px',
        marginLeft: '7px',
        marginTop: '7px'
    }
}
 
export default styles;