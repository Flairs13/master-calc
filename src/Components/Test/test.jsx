import React from "react";
import { render } from "react-dom";
import Select from "react-select";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

class Test extends React.Component {
    constructor(props) {
        super(props);

        const options = [
            { value: "one", label: "One" },
            { value: "two", label: "Two" }
        ];

        this.state = {
            select: {
                value: options[0],
                options
            }
        };
    }

    setValue = value => {
        this.setState(prevState => ({
            select: {
                ...prevState.select,
                value
            }
        }));
    };

    handleChange = value => {
        this.setValue(value);
    };

    handleClick = () => {
        this.setValue(null);
    };

    render() {
        const { select } = this.state;

        return (
            <div style={styles}>
                <p>
                    <button type="button" onClick={this.handleClick}>
                        Reset value
                    </button>
                </p>
                <Select
                    name="form-field-name"
                    value={select.value}
                    onChange={this.handleChange}
                    options={select.options}
                />
            </div>
        );
    }
}

export default Test