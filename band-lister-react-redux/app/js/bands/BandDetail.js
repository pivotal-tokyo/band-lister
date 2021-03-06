import React from 'react'
import PropTypes from 'prop-types'

export default class BandDetail extends React.Component {
  componentDidMount() {
    this.props.fetchBand()
  }

  render() {
    let band={}
    if (this.props.band) {
      band = this.props.band
    }
    return (
      <ul key={band.id}>
        <li className='id'>{band.id}</li>
        <li className='name'>{band.name}</li>
        <li className='member-count'>{band.memberCount}</li>
      </ul>
    )
  }
}

BandDetail.propTypes = {
  band: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    memberCount: PropTypes.number
  }),
  fetchBand: PropTypes.func.isRequired
}
