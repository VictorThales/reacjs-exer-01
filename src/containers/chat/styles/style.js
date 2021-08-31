import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({

  root: {
    width: '100%',
    height: '94%',
    marginTop: '1%'
  },

  header: {
    backgroundColor: 'rgb(130, 10, 209)',
    borderBottom: '3px solid rgb(130, 10, 209)',
    height: '7%',
  },

  textHeader: {
    padding: '4%',
    color: 'white',
    height: '100%',
    marginLeft: '1%',
    fontWeight: 'bold'
  },

  messageArea: {
    overflowY:'scroll',
    display: 'flex',
    flex:1,
    height:'600px',
    width: '96%',
    borderStyle: 'solid',
    borderColor: 'rgb(130, 10, 209)',
    marginLeft: '2%',
    marginTop: '2%',
    backgroundColor: 'white',
    borderWidth: '2px'
  },

  chatArea: {
    height:'800px',
    backgroundColor: 'white',
    padding: '0px',
    borderStyle: 'solid',
    borderColor: 'rgb(130, 10, 209)',
    borderWidth: '4px',
    borderRadius: '10px'
  },

  messageBar: {
    height: '5%',
    width: '96%',
    marginLeft: '2%',
    marginTop: '10%'
  },

  sendButton: {
    borderWidth: '2px',
    borderColor: 'rgb(130, 10, 209)',
    border: 'solid',
    width: '92%',
    marginLeft: '8%',
    color: 'rgb(130, 10, 209)'
  },

  buttonContainer: {
    backgroundColor: 'white',
    borderWidth: '2px',
    border: 'solid',
    borderColor: 'rgb(130, 10, 209)'
  },

  textField: {
    marginLeft: '5%',
    width: '90%'
  },

  messageContainerCompany: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(130, 10, 209)',
    width: '160px',
    height: '40px',
    marginTop: '10px',
    marginLeft: '2%',
    borderRadius: '5px',
    padding: '2px'
  },

  messageTextCompany: {
    color: 'white',
    marginLeft: '2px'
  },

  messageTextClient: {
    color: 'rgb(130, 10, 209)',
    marginLeft: '2px'
  },

  messageContainerClient: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '180px',
    height: '40px',
    marginTop: '10px',
    marginLeft: '46%',
    borderRadius: '5px',
    border: 'solid',
    borderColor: 'rgb(130, 10, 209)',
    borderWidth: '2px',
  }

});
