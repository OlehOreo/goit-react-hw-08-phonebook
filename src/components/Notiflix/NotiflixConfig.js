import Notiflix from 'notiflix';

Notiflix.Notify.init({
  width: '600px',
  fontSize: '30px',
  fontFamily: 'Quicksand',
  // textColor: '#f8efeff5',
  // background: '#363b54;',
  // textColor: '#f8efeff5',
  position: 'right-top',
  distance: '20px',
  opacity: 1,
  borderRadius: '5px',
  rtl: false,
  timeout: 3000,
  messageMaxLength: 110,
  backOverlay: false,
  backOverlayColor: 'rgba(0,0,0,0.5)',
  plainText: false,
  showOnlyTheLastOne: false,
  clickToClose: true,
  pauseOnHover: true,

  ID: 'NotiflixNotify',
  className: 'notiflix-notify',
  zindex: 4001,

  cssAnimation: true,
  cssAnimationDuration: 600,
  cssAnimationStyle: 'from-top', // 'fade' - 'zoom' - 'from-right' - 'from-top' - 'from-bottom' - 'from-left'
  closeButton: false,
  useIcon: true,
  useFontAwesome: false,
  fontAwesomeIconStyle: 'basic', // 'basic' - 'shadow'
  fontAwesomeIconSize: '34px',

  success: {
    background: '#363b54',
    textColor: '#f8efeff5',
    childClassName: 'notiflix-notify-success',
    notiflixIconColor: 'rgba(0,255,0,0.3)',
    fontAwesomeClassName: 'fas fa-check-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    backOverlayColor: 'rgba(50,198,130,0.2)',
  },

  warning: {
    background: '#363b54;',
    textColor: '#f8efeff5',
    childClassName: 'notiflix-notify-warning',
    notiflixIconColor: 'rgb(248, 235, 98)',
    fontAwesomeClassName: 'fas fa-exclamation-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    backOverlayColor: 'rgba(238,191,49,0.2)',
  },

  info: {
    background: '#363b54',
    textColor: '#f8efeff5',
    childClassName: 'notiflix-notify-info',
    notiflixIconColor: 'rgba(0,0,0,0.2)',
    fontAwesomeClassName: 'fas fa-info-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    backOverlayColor: 'rgba(38,192,211,0.2)',
  },
});
export default Notiflix;
