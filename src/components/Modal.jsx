import classes from "./Modal.module.css";
const Modal = (props) => {
  return (
    <>
      <div className={classes.backdrop}></div>
      <dialog open={true} className={classes.modal}>
        {props.children}
      </dialog>
    </>
  );
};

export default Modal;
