const styles = {
    profile_container: {
        display: 'grid',
        height: '900px',
        gridTemplateAreas:
        `'profile_main profile_edit'
        'profile_warning profile_warning'`,
        gridTemplateColumns: '1fr 2fr',
        gridTemplateRows: '3fr 1fr'
    },
    profile_main: {
        gridArea: 'profile_main'
    },
    profile_edit: {
        gridArea: 'profile_edit'
    },
    profile_warning: {
        gridArea: 'profile_warning'
    }
}

export default styles;