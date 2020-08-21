import React from 'react'

type Props = {
    title: string;
};

export const Track: React.FC<Props> = ({
    title
}) => {
    return (
        <div>{title}</div>
    )
};
