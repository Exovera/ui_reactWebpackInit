import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { Scrollbars } from "react-custom-scrollbars";

class CustomScrollbars extends React.Component {
	render() {
		const { theme, maxHeight, transparent, autoHide, ...rest } = this.props;
		const trackTheme = `scrollbar-${theme}-track`;
		const thumbTheme = `scrollbar-${theme}-thumb`;
		const trackThemeHorizontal = `scrollbar-${theme}-track-horizontal`;
		const thumbThemeHorizontal = `scrollbar-${theme}-thumb-horizontal`;
		const trackClass = classnames(trackTheme, { clearTrack: transparent });
		if (autoHide && maxHeight) {
			return (
				<Scrollbars
					autoHeight
					autoHeightMin={0}
					autoHeightMax={maxHeight}
					autoHide
					autoHideTimeout={1000}
					autoHideDuration={200}
					renderTrackVertical={(props) => <div {...props} className={trackClass} />}
					renderThumbVertical={(props) => <div {...props} className={thumbTheme} />}
					renderTrackHorizontal={(props) => <div {...props} className={trackThemeHorizontal} />}
					renderThumbHorizontal={(props) => <div {...props} className={thumbThemeHorizontal} />}
					{...rest}
				/>
			);
		} else if (maxHeight) {
			return (
				<Scrollbars
					autoHeight
					autoHeightMin={0}
					autoHeightMax={maxHeight}
					renderTrackVertical={(props) => <div {...props} className={trackClass} />}
					renderThumbVertical={(props) => <div {...props} className={thumbTheme} />}
					renderTrackHorizontal={(props) => <div {...props} className={trackThemeHorizontal} />}
					renderThumbHorizontal={(props) => <div {...props} className={thumbThemeHorizontal} />}
					{...rest}
				/>
			);
		} else if (autoHide) {
			return (
				<Scrollbars
					autoHide
					autoHideTimeout={1000}
					autoHideDuration={200}
					renderTrackVertical={(props) => <div {...props} className={trackClass} />}
					renderThumbVertical={(props) => <div {...props} className={thumbTheme} />}
					renderTrackHorizontal={(props) => <div {...props} className={trackThemeHorizontal} />}
					renderThumbHorizontal={(props) => <div {...props} className={thumbThemeHorizontal} />}
					{...rest}
				/>
			);
		} else {
			return (
				<Scrollbars
					renderTrackVertical={(props) => <div {...props} className={trackClass} />}
					renderThumbVertical={(props) => <div {...props} className={thumbTheme} />}
					renderTrackHorizontal={(props) => <div {...props} className={trackThemeHorizontal} />}
					renderThumbHorizontal={(props) => <div {...props} className={thumbThemeHorizontal} />}
					{...rest}
				/>
			);
		}
	}
}

CustomScrollbars.propTypes = {
	theme: PropTypes.string.isRequired, // light, dark, medWide, lightWide
	transparent: PropTypes.bool,
	maxHeight: PropTypes.number,
};

export default CustomScrollbars;
