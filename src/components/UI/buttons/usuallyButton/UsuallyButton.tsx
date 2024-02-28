import classes from './UsuallyButton.module.scss';

const UsuallyButton = ({ ...props }) => {
    return (
        <button {...props} className={`${classes.usuallyButton} ${props.className}`}>
            {props.children}
        </button>
    );
};

export default UsuallyButton;