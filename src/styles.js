const styles = {
    navHeadAttributes: {
        className:"nav",
        style: {
        padding: 15, 
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
        marginBottom: 5, 
        marginLeft: 15, 
        marginRight: 15, 
        color: '#fff', 
        backgroundColor: '#008183'
        }
    }
}

export { styles }