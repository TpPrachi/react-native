import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    outLinedTextField: {
        paddingHorizontal: 20,
    },

    rowContainer: {
        flex: 1,
        justifyContent: "space-around",
        backgroundColor: 'rgb(255, 224, 179)',
        alignItems: "center",
        width: 381,
        height: 50,
        flexDirection: 'row',
    },
    combineRowContainer: {
        flexDirection: 'row'
    },
    topTitleContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-around",
        backgroundColor: 'black',
        alignItems: "center",
        width: 378,
        height: 50,
        padding: 5,
    },
    imageViewController: {
        alignItems: "center",
        height: 238,
        backgroundColor: 'black',
        borderRadius: 10,
        margin: 15,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    titleTextColor: {
        color: 'black',
        marginStart: 10,
        fontSize: 18,

    },
    textColor: {
        color: 'black'
    },
    shadowController: {
        flex: 1,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        margin: 10,
        elevation: 8,

    },
    imageContainer: {
        justifyContent: 'flex-end',
        width: 380,
        height: 150,
        marginTop: 25,
    },

    horizontalImageContainer: {
        margin: 7

    },

    transparentContainer: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        flexDirection: 'row',

    },
    horizontalImageViewContainer: {
        width: ((Dimensions.get('window').width - 60) / 2),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    textStyle: {
        color: 'black',
        marginStart: 5,
        marginTop: 3
    },
    lastViewContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'black',
        width: 381.5,
        height: 5,
        padding: 5,
        borderColor: 'silver', borderWidth: 1, borderTopWidth: 0, borderBottomStartRadius: 10, borderBottomEndRadius: 10
    },
});