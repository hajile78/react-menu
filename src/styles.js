const styles = {
    navHeadAttributes: {
        className:"nav",
        style: {
        paddingTop: 15, 
        minWidth: 960, 
        width: '100%', 
        display: 'grid', 
        alignItems: 'flex-end',
        gridTemplateColumns: '2fr 3fr 5.5fr .5fr',
        backgroundColor: '#18453B'
        },
    },
    buttonAttributes: {
        className:"navBtn",
        onClick: function (event) {
        event.preventDefault();
        console.log(event.target);
        },
        style: {
        padding: 10, 
        marginTop: 5, 
        marginBottom: 0, 
        marginLeft: 0, 
        marginRight: 0, 
        color: '#fff', 
        background: 'transparent',
        border: 'none'
        }
    }
}

export { styles }