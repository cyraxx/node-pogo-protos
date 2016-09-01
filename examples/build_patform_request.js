const POGOProtos = require('node-pogo-protos');

var myMessage = new POGOProtos.Networking.Envelopes.RequestEnvelope.PlatformRequest({
	type: POGOProtos.Networking.Platform.PlatformRequestType.SEND_ENCRYPTED_SIGNATURE,
	request_message: new POGOProtos.Networking.Platform.Requests.SendEncryptedSignatureRequest({
		encrypted_signature: YOUR_ENCRYPTED_SIGNATURE
	}).encode().toBuffer()
});

/**
  * You can assign the variable "myMessage" to the old "Unknown6" field of RequestEnvelope.
*/