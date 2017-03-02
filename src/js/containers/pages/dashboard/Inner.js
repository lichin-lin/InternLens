import { connect } from 'react-redux'
import Components from 'components'
// import Actions from 'js/actions'

const mapStateToProps = (state, ownProps) => ({
    InnerContent: {
        ...ownProps
    }
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Components.pages.dashboard.Inner)
