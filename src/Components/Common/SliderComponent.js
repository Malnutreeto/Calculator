import React from "react";
import Slider from '@mui/material/Slider';
import { Stack, Typography } from "@mui/material";

const SliderComponent = ({ defaultValue, min, max, step, onChange, value, label, unit, amount }) => {
    return (
        <Stack my={1.4}>
            <Stack gap={1}>
                <Typography variant="subtitle">{label }</Typography>
                <Typography variant="h5"> {amount}{unit}</Typography>
            </Stack>
            <Slider
                defaultValue={defaultValue}
                min={min} max={max}
                marks
                step={step}
                onChange={onChange}
                value={value}
                aria-label="Default"
                valueLabelDisplay="auto" />
            <Stack direction='row' justifyContent='space-between'>
            <Typography variant='caption' color='text.secondary'>{min}{unit}</Typography>
            <Typography variant='caption' color='text.secondary'>{max}{unit}</Typography>
            </Stack>
        </Stack >

    );
}


export default SliderComponent;