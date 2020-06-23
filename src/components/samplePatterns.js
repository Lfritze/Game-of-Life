import React from 'react';
import { Dropdown, Button } from 'semantic-ui-react';

const options = [
    { key: 'glider', value: 'glider', text: 'Glider' },
    { key: 'diehard', value: 'diehard', text: 'Diehard' },
    { key: 'gliderGun', value: 'gliderGun', text: 'Gosper Glider Gun' }
];

class SamplePatterns extends React.Component {

    state = {
        pattern: ''
    }

    onLoad = () => {
        const { pattern } = this.state;
        return pattern ? this.props.load(pattern) : null;
    }

    render() {
        return (
            <div className='controls'>
                <Button as='div' labelPosition='left'>
                    <Dropdown
                        placeholder='Select a pattern'
                        options={options}
                        selection
                        className='label'
                        value={this.state.pattern}
                        onChange={(e, { value }) => this.setState({ pattern: value })}
                    />
                    <Button
                        content='Load'
                        onClick={this.onLoad}
                        disabled={this.props.running}
                    />
                </Button>
            </div>
        );
    }

}

export default SamplePatterns;