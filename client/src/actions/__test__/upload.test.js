/* globals test expect */
import { startUpload, stopUpload } from './../upload'

test('startUpload should have the proper type', () => {
  expect(startUpload().type).toEqual('START_UPLOAD')
})

test('stopUpload should have the proper type', () => {
  expect(stopUpload().type).toEqual('STOP_UPLOAD')
})
