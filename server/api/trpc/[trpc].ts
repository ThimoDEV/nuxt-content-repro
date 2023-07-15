import { createNuxtApiHandler } from 'trpc-nuxt'
import { createContext } from '../../trpc/context'
import { appRouter } from '../../trpc/root'

// export API handler
export default createNuxtApiHandler({
  router: appRouter,
  createContext,
})
