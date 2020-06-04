import React from 'react'

const axios = require("axios");
import {DropzoneDialog} from 'material-ui-dropzone';
import Button from '@material-ui/core/Button';

class UploadResult extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            files: null,
            open: false
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }


    onSubmit() {
        const formData = new FormData();
        formData.append('myImage', this.state.files);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("http://localhost:3002/upload", formData, config)
            .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
                console.log(error);
        });
        this.props.history.push('/');
    }

    onChange(files) {
        this.setState({
            files: files[0]
        });
        console.log(files);
    }

    render() {
        return (


            <div>
                <Button variant="contained" color="primary" onClick={() => this.setState({open: true})}>
                    Add Score Card
                </Button>

                <DropzoneDialog
                    acceptedFiles={['image/*']}
                    cancelButtonText={"cancel"}
                    submitButtonText={"submit"}
                    maxFileSize={1000000}
                    open={this.state.open}
                    onClose={() => this.setState({open: false})}
                    onSave={this.onSubmit}
                    onChange={this.onChange}
                    showPreviews={true}
                    showFileNamesInPreview={true}
                />
            </div>
        )
    }
}

export default UploadResult;
