export const AppStyleTypes = {
  SET_BACKGROUND_COLOR: 'APP_STYLE_SET_BACKGROUND_COLOR'
}

export const setBackgroundColor = (color: string) => ({
  type: AppStyleTypes.SET_BACKGROUND_COLOR,
  color
})