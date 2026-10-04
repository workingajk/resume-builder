import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function Home() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>App Component</h1>
            <button
                className="btn btn-primary"
                onClick={() => setCount(count + 1)}
            >
                count {count}
            </button>
            <Stack spacing={2} direction="row">
                <Button variant="text" onClick={() => setCount(count + 1)}>count {count}</Button>
                <Button variant="contained" onClick={() => setCount(count + 1)}>count {count}</Button>
                <Button variant="outlined"  onClick={() => setCount(count + 1)}>count {count}</Button>
            </Stack>
        </div>
    );
}

export default Home;
