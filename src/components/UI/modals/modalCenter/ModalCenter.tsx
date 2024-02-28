import classes from './ModalCenter.module.scss';

const ModalCenter = ({ ...props }) => {
    return (
        <div {...props} className={`${classes.modalCenter} ${props.className}`}>
            <p>hello world</p>
            {props.children}
        </div>
    );
};

export default ModalCenter;