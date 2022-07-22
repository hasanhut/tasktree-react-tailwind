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

const MoreIcon = ({ size }) => {
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
                d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
            ></path>
        </svg>
    );
};

const EditInactiveIcon = ({ size }) => {
    return (
        <svg
            role="img"
            height={size}
            width={size}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
        </svg>
    );
};

const EditActiveIcon = ({ size }) => {
    return (
        <svg
            role="img"
            height={size}
            width={size}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
        </svg>
    );
};

const MoveInactiveIcon = ({ size }) => {
    return (
        <svg
            height={size}
            width={size}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
            <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
            <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    );
};

const MoveActiveIcon = ({ size }) => {
    return (
        <svg
            role="img"
            height={size}
            width={size}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
        </svg>
    );
};

const DeleteInactiveIcon = ({ size }) => {
    return (
        <svg
            role="img"
            height={size}
            width={size}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="6"
                width="10"
                height="10"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
            <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    );
};

const DeleteActiveIcon = ({ size }) => {
    return (
        <svg
            role="img"
            height={size}
            width={size}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="6"
                width="10"
                height="10"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
        </svg>
    );
};

const Icon = ({ size = 24, name }) => {
    const icons = {
        add: AddIcon,
        more: MoreIcon,
        editInactive: EditInactiveIcon,
        editActive: EditActiveIcon,
        moveInactive: MoveInactiveIcon,
        moveActive: MoveActiveIcon,
        deleteInactive: DeleteInactiveIcon,
        deleteActive: DeleteActiveIcon,
    };
    const Component = icons[name];
    return <Component size={size} />;
};

export { Icon };
