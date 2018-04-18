import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import _ from "underscore";
import Measure from "react-measure";

import { shouldUpdate } from "recompose";
import Scrollbars from "config/CustomScrollbars.jsx";

class Modal extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			dimensions: {
				width: 0,
				height: 0,
			},
		};
	}
	componentWillReceiveProps(nextProps) {
		// Scroll the modal to the top when it closes
		if (!nextProps.open && this.props.open) {
			// If we're closing the modal
			this.modalBox.scrollTop = 0;
		}
	}
	render() {
		const props = this.props;
		const { height, width } = this.state.dimensions;
		const modalClass = classnames("modal", props.direction, props.size, {
			open: props.open,
			// scrollbar: props.scrollbar,
			darkUI: props.darkUI,
			noPadding: props.noPadding,
		});

		const modalContents = (
			<Measure
				bounds
				onResize={(contentRect) => {
					this.setState({ dimensions: contentRect.bounds });
				}}
			>
				{({ measureRef }) => (
					<div ref={measureRef}>
						{props.children}
						{props.x && <div className="modal__x" onClick={() => props.dispatch(props.xClick())} />}
						{props.backBtn && (
							<div className="modal__back" onClick={() => props.dispatch(props.backClick())}>
								<div className="modal__back__arrow" />
								<span>Back</span>
							</div>
						)}
					</div>
				)}
			</Measure>
		);

		return (
			<div id={props.id} className={modalClass} >
				<div
					className="modal__box"
					ref={(modalBox) => (this.modalBox = modalBox)}
					style={{ height: props.scrollbar && `${height}px` }}
				>
					{props.scrollbar ? (
						<Scrollbars theme="dark" transparent={true} autoHide={false}>
							{modalContents}
						</Scrollbars>
					) : (
							modalContents
						)}
				</div>
				<div className="modal__shadowbox" onClick={() => props.dispatch(props.backgroundClick())} />
			</div>
		);
	}
}

Modal.propTypes = {
	direction: PropTypes.oneOf(["top", "bottom", "left", "right", "fade", "fadeOut"]).isRequired,
	size: PropTypes.oneOf(["huge", "large", "medium", "small", "tiny", "huge-article", "full"])
		.isRequired,
	open: PropTypes.bool.isRequired,
	backgroundClick: PropTypes.func, // Usually will dispatch a close
	backClick: PropTypes.func, // Usually will dispatch a close
	backBtn: PropTypes.bool, // true has back navigation - use in place of x
	id: PropTypes.string, // For testing.
	noPadding: PropTypes.bool,
	x: PropTypes.bool, // Should the x appear (make sure to pass function too)
	xClick: PropTypes.func, // Usually will dispatch a close
	dispatch: PropTypes.func, // Required if passing backgroundClick
	scrollbar: PropTypes.bool,
	darkUI: PropTypes.bool, // true adds a class that changes the color.
};

const ModalUpdate = shouldUpdate((props, nextProps) => {
	return !_.isEqual(props, nextProps);
})(Modal);

export default ModalUpdate;
