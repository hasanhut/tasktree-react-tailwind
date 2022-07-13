const AddIcon = ({ size }) => {
    return (
        <svg
            role="img"
            height={size}
            width={size}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill="currentColor"
                d="M20 13h-7v7h-2v-7H4v-2h7V4h2v7h7v2z"
            ></path>
        </svg>
    );
};

const Icon = ({ size = 24, name }) => {
    const icons = {
        add: AddIcon,
    };
    const Component = icons[name];
    return <Component size={size} />;
};

export { Icon };
