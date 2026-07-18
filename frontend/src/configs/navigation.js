import Icons from "../components/icons"

export default [
  {
    title: 'navigation.recipes',
    href: '/recipes',
    auth: false
  },
  {
    title: 'navigation.createRecipe',
    href: '/recipes/create',
    auth: true
  }
]

export const UserMenu = [
  {
    title: 'navigation.subscriptions',
    href: '/subscriptions',
    auth: true,
    icon: <Icons.SubscriptionsMenu />
  },
  {
    title: 'navigation.favorites',
    href: '/favorites',
    auth: true,
    icon: <Icons.SavedMenu />
  },
  {
    title: 'navigation.changePassword',
    href: '/change-password',
    auth: true,
    icon: <Icons.ResetPasswordMenu />
  }
]

export const NotLoggedInMenu = [
  {
    title: 'navigation.signIn',
    href: '/signin',
    auth: false
  },
  {
    title: 'navigation.signUp',
    href: '/signup',
    auth: false
  }
]
