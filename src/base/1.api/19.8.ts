import { createStore, Store } from "redux"
type StoreWithExt = Store & {
  ext: string
}
let store: StoreWithExt