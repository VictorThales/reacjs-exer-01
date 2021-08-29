import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({

  root: {
    width: '100%',
    height: '100%',
  },

  header: {
    backgroundColor: 'rgb(130, 10, 209)',
    borderBottom: '3px solid rgb(130, 10, 209)',
    height:'7%',
  },

  textHeader: {
    padding:'1%',
    color:'white',
    height:'100%',
    marginLeft: '1%',
    fontWeight:'bold'
  },

  messageArea: {
    height: '80%',
    width: '96%',
    borderStyle: 'solid',
    borderColor:'rgb(130, 10, 209)',
    marginLeft: '2%',
    marginTop: '2%',
    backgroundColor:'#edf2fc',
    borderWidth:'2px'
  },

  chatArea: {
    backgroundColor: 'white',
    padding: '0px',
    borderStyle: 'solid',
    borderColor:'rgb(130, 10, 209)',
    borderWidth:'4px'
  },

  messageBar: {
    //border:'solid',
    height: '5%',
    width: '96%',
    marginLeft: '2%',
    marginTop: '4%'
  },

  sendButton: {
    borderWidth:'2px',
    borderColor:'rgb(130, 10, 209)',
    border:'solid',
    width: '92%',
    marginLeft: '8%',
    color:'rgb(130, 10, 209)'
  },
  buttonContainer: {
    backgroundColor:'white',
    borderWidth:'2px',
    border: 'solid',
    borderColor:'rgb(130, 10, 209)'
  },

  textField: {
    marginLeft:'5%',
    width: '90%'
  },

  messageContainerCompany:{
    backgroundColor:'rgb(130, 10, 209)',
    width:'160px',
    height:'40px',
    marginTop:'10px',
    marginLeft:'5%',
    borderRadius:'5px',
    padding:'2px'
  },

  messageTextCompany:{
    color:'white',
    marginLeft:'2px'
  },

  messageTextClient:{
    color:'rgb(130, 10, 209)',
    marginLeft:'2px'
  },

  messageContainerClient:{
    backgroundColor:'white',
    width:'160px',
    height:'40px',
    marginTop:'10px',
    marginLeft:'70%',
    borderRadius:'5px',
    border:'solid',
    borderColor:'rgb(130, 10, 209)',
    borderWidth:'2px'
  }


});
