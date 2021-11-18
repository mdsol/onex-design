import { useState } from 'react';
import { ToggleButtonGroup, ToggleButton, Check, Switch, TextField, TextArea } from './components';
import Button from './jt-components/Button';

const IconComponent = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-brightness-high-fill"
        viewBox="0 0 16 16"
    >
        <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
    </svg>
);

const App = () => {
    const [value, setValue] = useState(null);
    const [checked, setChecked] = useState(false);
    const [switched, setSwitched] = useState(false);
    const [inputValue, setInputValue] = useState();

    return (
        <div style={{ padding: '50px' }}>
            <Button>Clickable</Button>
            <br />
            <ToggleButtonGroup
                value={value}
                onChange={(val) => setValue(val)}
                name="custom-group-button"
                type="radio"
                size="sm"
                variant="button"
            >
                <ToggleButton id="tbg-btn-1" value={1} name="tbg-btn-1">
                    <IconComponent />
                </ToggleButton>
                <ToggleButton id="tbg-btn-2" value={2} name="tbg-btn-2">
                    <IconComponent />
                </ToggleButton>
                <ToggleButton id="tbg-btn-3" value={3} name="tbg-btn-3" disabled>
                    <IconComponent />
                </ToggleButton>
            </ToggleButtonGroup>
            <br />
            <br />
            <Check
                id="custom-check"
                checked={checked}
                size="lg"
                indeterminate
                label="Checkbox text"
                onChange={(event) => setChecked(event.target.checked)}
            />
            <br />
            <br />
            <Switch
                id="custom-switch"
                checked={switched}
                onChange={(event) => setSwitched(event.target.checked)}
            />
            <br />
            <br />
            <TextField
                label="Label"
                placeholder="Placeholder"
                size="lg"
                value={inputValue}
                showIcon
                onChange={(_value) => setInputValue(_value)}
                showClearBtn
            />
            <br />
            <TextArea
                label="Label"
                placeholder="Placeholder"
                size="sm"
                helpText="Help text"
                maxNumLength="30"
                rows={5}
            />
        </div>
    );
};

export default App;
