import React from 'react';
import { StyleSheet, Dimensions, Button } from 'react-native';
import Modal from 'react-native-modal';
import { View } from '../outputs/View';
import { Text } from '../outputs/Text';

const PopUpGeneral = props => {
  const {
    containerStyle,
    viewStyleTitleContainer,
    viewStyleTitle,
    textStyleTitle,
    textStyleSubtitle,
    iconStyleTitleRight,
    viewStyleFooter,
    viewStyleContent,
    bottomModal,
    textStyleContent,
    modalStyle,
    textStyleError,
  } = styles;

  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight = Dimensions.get('window').height;

  let {
    title,
    subtitle,
    iconTitleRight,
    onPressTitleRight,
    modalActionOne,
    textActionOne,
    onPressActionOne,
    modalActionTwo,
    textActionTwo,
    onPressActionTwo,
    loading,
    children,
    content,
    contentText,
    visible,
    onDismiss,
    errorText,
    colorTitleText,
    colors,
    design,
    docked,
    modal,
    actionOne,
    actionTwo,
    scrollView,
    buttonActions
  } = props;

  if (modal) {
    ({
      title,
      subtitle,
      errorText,
      visible,
      contentText,
      content,
      loading,
      onDismiss,
      actionOne,
      actionTwo,
    } = modal);

    modalActionOne = actionOne;
    modalActionTwo = actionTwo;
  }

  if (textActionOne && !modalActionOne) {
    modalActionOne = {
      ...modalActionOne,
      label: textActionOne,
      onPress: onPressActionOne,
    };
  }

  if (textActionTwo && !modalActionTwo) {
    modalActionTwo = {
      ...modalActionTwo,
      label: textActionTwo,
      onPress: onPressActionTwo,
    };
  }

  const ButtonActions = () => {
    return (
      <View fD={'row'} pt={1}>
        {buttonActions.map((button, index) => (
          <View f={1} key={index}>
            <Button
              wide
              type={button.type}
              label={button.text}
              onPress={button.onPress}
              loading={button.loading}
            />
          </View>
        ))}
      </View>
    );
  };

  return (
    <Modal
      isVisible={visible}
      // useNativeDriver
      style={docked ? bottomModal : modalStyle}
      coverScreen
      avoidKeyboard
      propagateSwipe={scrollView}
      onBackdropPress={() => onDismiss()}
      deviceWidth={deviceWidth}
      deviceHeight={deviceHeight}
      hideModalContentWhileAnimating>
      <View
        style={[
          containerStyle,
          { justifyContent: 'space-between' },
          { borderRadius: 10 },
          { flex: 0 },
          docked
            ? { borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }
            : {},
        ]}
        scrollView={scrollView}>
        <View>
          {title || subtitle || iconTitleRight ? (
            <View resizeMode="cover" style={[viewStyleTitleContainer]}>
              {title ? (
                <Text s={18} fW={400} c="#747474" style={textStyleTitle}>
                  {title} 
                </Text>
              ) : null}
              {subtitle ? (
                <Text
                s={12}
                tA="center"
                  c="primary"
                  style={[
                    textStyleSubtitle,
                    {
                      color: colorTitleText ? colorTitleText : colors.font,
                    },
                  ]}>
                  {subtitle}
                </Text>
              ) : null}
              {iconTitleRight ? (
                <View style={iconStyleTitleRight}>
                  {/* <HeaderButton
                    icon={iconTitleRight}
                    onPress={onPressTitleRight}
                    color="lightgrey"
                  /> */}
                </View>
              ) : null}
            </View>
          ) : null}
          <View>
            {contentText ? (
              <Text style={textStyleContent} fW={'400'}>
                {contentText}
              </Text>
            ) : null}
            {children ? children : null}
            {content ? content : null}
            {errorText ? (
              <Text style={[textStyleError, { color: colors.error }]}>
                {errorText}
              </Text>
            ) : null}
          </View>
        </View>
        <View style={viewStyleFooter}>
          {modalActionOne || modalActionTwo ? (
            <View>
              {loading ? (
                  <></>
                // <Spinner size="small" containerStyle={{ width: '100%' }} />
              ) : (
                  <></>
                // <CardActions
                //   actionOne={modalActionOne}
                //   actionTwo={modalActionTwo}
                //   buttonActions={buttonActions}
                // />
              )}
            </View>
          ) : buttonActions ? (
            ButtonActions()
          ) : null}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#fff',
    // borderRadius: 6,
    // overflow: 'hidden',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  modalStyle: {
    margin: 8,
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 8,
    marginBottom: 0,
  },
  viewStyleTitleContainer: {
    // flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 20,
  },
  textStyleTitle: {
    flexShrink: 1,
    flexWrap: 'wrap',
    marginBottom: 20,
    // width: '85%'
  },
  textStyleSubtitle: {
    opacity: 0.8,
    fontSize: 12,
  },
  textStyleContent: {
    fontSize: 16,
    // padding: 8,
    // paddingHorizontal: 16,
    textAlign: 'center',
  },
  textStyleError: {
    padding: 8,
    paddingBottom: 0,
    fontSize: 14,
    // color: Colors.error,
  },
  iconStyleTitleRight: {
    right: 0,
    top: -12,
    margin: 0,
    position: 'absolute',
  },
  viewStyleFooter: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
});


export { PopUpGeneral };
