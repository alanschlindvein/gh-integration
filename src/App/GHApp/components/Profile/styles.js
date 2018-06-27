export default {
  container: {
    marginTop: '1em',
    padding: '1em',
    display: 'flex'
  },
  avatar: {
    width: '10em',
    height: '10em',
    '& > img': {
      width: '100%',
      height: '100%'
    }
  },
  info: {
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    margin: '0 1em'
  },
  name: {
    margin: 0
  },
  login: {
    fontSize: '.9em',
    color: 'gray'
  }
}