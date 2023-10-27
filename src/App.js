import { Button, Input, Checkbox, Slider, Radio } from 'antd';


export default function App(){

    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    const buttons = [];
    const inputs = [];
    const checkbox = []
    const slides = []

    const radio = []

    for (let i = 1; i <= 500; i++) {
        buttons.push(<Button key={i} type="primary">Primary Button {i}</Button>);
    }

    for (let i = 1; i <= 500; i++) {
        inputs.push(<Input placeholder="Basic usage" key={i}/>);
    }

    for (let i = 1; i <= 500; i++) {
        checkbox.push(<Checkbox onChange={onChange} key={i}>Checkbox</Checkbox>);
    }

    for (let i = 1; i <= 500; i++) {
        slides.push(<Slider defaultValue={30} disabled={false}/>);
    }

    for (let i = 1; i <= 500; i++) {
        radio.push(<Radio key={i}>Radio</Radio>);
    }


    return(
        <div>
            {buttons}
            {inputs}
            {checkbox}
            {radio}
        </div>
    )
}
