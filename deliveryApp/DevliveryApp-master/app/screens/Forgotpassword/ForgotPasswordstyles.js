import { StyleSheet, Dimensions } from 'react-native';
import Styles from '../../config/styles';
const { width: viewportWidth , height: viewportHeight } = Dimensions.get('window');
const { color ,Typography} = Styles;

const ForgotPasswordstyles = StyleSheet.create({
    loginBg:{
        position:"absolute",
        width:viewportWidth,
        height:viewportHeight,
        top:0
    },
    passwordImg:{
        height:viewportWidth*0.05,
        width:viewportWidth*0.04,
        marginLeft:viewportWidth*0.035
    },
    verificationInner:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    verification:{
        width:viewportWidth*0.7,
        height:viewportWidth*0.7,
        overflow:'visible',
    },
    ImgContainer:{
       marginTop:viewportWidth*0.05,
       marginBottom:viewportWidth*0.07
    },
    titletext:{
        color:color.COLOR_WHITE,
        fontFamily:Typography.FONT_REGULAR,
        fontSize:Typography.FONT_SIZE20,
        marginBottom:viewportWidth*0.015,
        textAlign:'center'
    },
    Detailtext:{
        color:color.COLOR_WHITE,
        fontFamily:Typography.FONT_REGULAR,
        fontSize:Typography.FONT_SIZE14,
        textAlign:'center', 
    },
    textInput:{
        backgroundColor:color.COLOR_WHITE,
        marginHorizontal:viewportWidth*0.02,
        marginVertical:viewportWidth*0.06,
        fontSize:Typography.FONT_SIZE18,
        height:viewportWidth*0.12,
        width:viewportWidth*0.11,
        borderRadius:viewportWidth*0.01,
        paddingHorizontal:viewportWidth*0.02,
        color:color.COLOR_BLACK,
        textAlign:"center",
        fontFamily:Typography.FONT_BOLD
    },
    flexBox:{
        display:"flex",
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    textBoxContent:{
        position:"relative",
        width:'89%',
        marginTop:viewportWidth*0.06
      },
      textBoxInner:{
          position:"absolute",
          right:viewportWidth*0.035,
          top:10,
          display:'flex',
          flexDirection:"row",
          alignItems:'center', 
      },
      lineImg:{
        height:viewportWidth*0.07, 
        marginTop:3
    },
      textBoxImg:{
          height:viewportWidth*0.048,
          width:viewportWidth*0.05,
          marginLeft:viewportWidth*0.035
      },
    btnGreen:{
       marginTop:viewportWidth*0.04
    },
    btnText:{
        fontSize:Typography.FONT_SIZE,
        paddingHorizontal:viewportWidth*0.12,
        paddingVertical:viewportWidth*0.035,
        color:color.COLOR_WHITE,
        fontFamily:Typography.FONT_REGULAR,
        borderRadius:viewportWidth*0.01
    },
    btnDisable:{
        backgroundColor:color.COLOR_GREY,
    },
    btnActive:{
        backgroundColor:color.COLOR_PRIMARY,
    }
});

export default ForgotPasswordstyles;
