import React from 'react';
import { Dropdown, Button } from 'semantic-ui-react';

const options = [

    { key: 'glider', value: 'glider', text: 'Glider' },
    
];

class SamplePatterns extends React.Component {

    state = {
        sample: 'glider'
    }

    onLoad = () => {
        const { sample } = this.state;
        return sample ? this.props.load(sample) : null;
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
                        value={this.state.sample}
                        onChange={(e, { value }) => this.setState({ sample: value })}
                    />
                    <Button
                        content='Load'
                        onClick={this.onLoad}
                        disabled={this.props.playing}
                    />
                </Button>
            </div>
        );
    }

}

export default SamplePatterns;