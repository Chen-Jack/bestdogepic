import React from 'react'
import { connect } from 'react-redux'
import { startUpload } from './../actions/upload'

export class ImageUploader extends React.Component {
  render () {
    return <div>
      <h1> Upload an Image! </h1>
      <input type='file' name='pic' accept='image/*' />
      <button type='button' onClick={this.props.startUpload}> Upload </button>
    </div>
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    startUpload: () => dispatch(startUpload())
  }
}

export default connect(null, mapDispatchToProps)(ImageUploader)

