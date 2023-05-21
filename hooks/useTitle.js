import { useEffect } from "react";

const useTitle = (title) => {

    useEffect(() => {
        document.title = ` Drone BD | ${title} `
    }, [title])

};

export default useTitle;

//or use React HELMET