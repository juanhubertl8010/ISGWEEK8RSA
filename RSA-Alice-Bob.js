const crypto = require("crypto");

//sender alice recipient bob

const recipientPublicKeyPem = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqAuJZBfFeEZniIahrFXu
qmiC6JZlqKkFY0u+cncv/+2QQ2p0tXLvajtP8fQWWuW6c/3xPnz63t83cxLehrRZ
i+NiJOeiThmI7m3G9JiVo+clj3ayWYtbXLvJg3CqgAOmH9RPguokzTocdTtustim
Li9gFhV+hnIWWXYg7k0ruM7GEoHj8bfBHIcODYJh6ChF0zjbmFv1Cqt4ep3UGqGr
CP6q/rv8FljIhWvHBzWuzFF/vsfd6D943vYPs7h9XqzSbBJG1UCf+vzTAfZDk3Mm
yMRp+A14vjGB9gmkZEcqyUAgfZVN8qiwD6m95NfsTdLcWZzisq3bOP+s4G/1CWTF
jQIDAQAB
-----END PUBLIC KEY-----`;
const recipientPublicKey = crypto.createPublicKey(recipientPublicKeyPem);

const recipientPrivateKeyPem = `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCoC4lkF8V4RmeI
hqGsVe6qaILolmWoqQVjS75ydy//7ZBDanS1cu9qO0/x9BZa5bpz/fE+fPre3zdz
Et6GtFmL42Ik56JOGYjubcb0mJWj5yWPdrJZi1tcu8mDcKqAA6Yf1E+C6iTNOhx1
O26y2KYuL2AWFX6GchZZdiDuTSu4zsYSgePxt8Echw4NgmHoKEXTONuYW/UKq3h6
ndQaoasI/qr+u/wWWMiFa8cHNa7MUX++x93oP3je9g+zuH1erNJsEkbVQJ/6/NMB
9kOTcybIxGn4DXi+MYH2CaRkRyrJQCB9lU3yqLAPqb3k1+xN0txZnOKyrds4/6zg
b/UJZMWNAgMBAAECggEAHwnqeaNuZPXUH8KGUDebGrytGVrWMh3uEdYmuivLoOD3
WYxrPCybjiqgbJdiHa37D3ujOKCLEel263lbwtPDCnSYZyqlrvlGcouySPF6Ckki
heotrR5xZKKG6RFBXN3PrGdhvFOVMpb+NKUioEQmBbfYbpvPv/OIr0ODd6CnZ730
nk/PmVwrkzOE0UFO7vugX4rJtxEk2HvxaDf209gV/vxZE8X33Ts6sGeu72bJE+5/
ST47o9gcDv5eC/XmUsaGtO6etqJeEkrjuaYuF15KAFjGICYFHy/27lkVI0d//XHw
6ptrNGdNyau0LFXtvvpp6E03Adi05FRrKB6zuZM2HQKBgQDkFuGBAXioLmATFNI3
dfOybZJSkUR993o/H/s/3yYocwRK2E06puNJx09KUAttjdgy90qHy8Lwp5dPxaxP
7uEM3gCdWWEDf8CjflyWRIg5TYgba4hItsRqhE75B3kPIsnZdpmegWL2WP1Us1Fb
3ptwpmN9nrYK3GfSHq5bz5alawKBgQC8m7W/haSRd7hKMpxTIRcAwFS6buPzI4CI
TBPDgLlJocrq4VyDJkNFA/oy171EgcFpNUJmCMgTaYDyFjAqdi+aQTWO5SXfQPOF
DCgjJ/RaG0/Lqe84Kq2ydF9XP4W7nfY88vhDZk6KTLXN1lptDinjYl8ovZq+70rS
efthAf8G5wKBgQDR0HJz92SEYNSj+N0/g1M/aSfWqCa3MXXUp5i5so4pW1QxfTPd
pjMiZSN9GpDIoFim2XBH5ppWQfQgv5e4l+eRrI4oMFXboCMWwmBtInGlNLrlbk+Z
g/a+fSMgVU15LOk9D6pUcnUUY9v1lFZdCjM2tviCUALpjsI6OVruvdC4LQKBgHIe
rRvTWz4BeGq8sMXD0c1MknezvQ1Sv+S4U4UJkBMzaDoyXe2k6zMJMwwsaYLYGBT2
etSOH7FPNwxDzKUEmcz2A9gQYpfxDufD8U1EUZ9rwx5yFiKgADVoIIAEGYDqFSHP
ydPORVt9CswfFNvDpCjHTtix0L4Sv+0WjbmmoY6lAoGBAJQOj19NFtN5/V0i9ezO
vffTp8PgsW8K++jzt2HYAMI22ia0foz8A9wlZVahY/K4Esi1DOLsG9Pwrn8m9qAc
iVIwy4UAkeyKVJEvk62ihmFoipK5LzrhFeDB5gsG8HCS2oJB5WI6KWV0KfmnkJm/
2Q5fY69r4N/3pfD3/MJmWSqk
-----END PRIVATE KEY-----`;
const recipientPrivateKey = crypto.createPrivateKey(recipientPrivateKeyPem);

const senderPrivateKeyPem = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCOGwRRDaWod3WT
5hFdOCUQDrdGppKjz21YyiHzIoLAr8O9CprviR+XkeAbgpZcI5f4yKUJj8gu/SET
fZYDBnaRdo0kRVtnLpqmwjyuK7yFlqVnuhDfC9Beni+cyBcA2SnW4fh6BQlUaxAX
UXxKXxE/tmpmw6qyR4aRJKKAFtVZfoppO8qeYoHkIylfkkJuqc86DM5YdFim2keq
vFvjRQbDMs89w8j+NJ/ASx+seldyfueBZ/ubYCAUPv1fbtBlpYl7l3j/KSV9Fe0v
T37R9FHc+/jxfxF9RC8t4aEda9wdFGIHV0WueH0ltpIV2PCe2chcYaQzAwtaPb5H
Tbpbt5KvAgMBAAECggEAEKZEsrRtINhiO8JcbXYbDY8T1SDGFJBEiP8hzClSdX4C
an84GPGRdIJAZii+MixvbVQg1gZ1F2BMBEsWDOOwd6mSrtm7dFLnBrvCPUvdii9U
0NrhiCiLsNJK1M0yuMQ43TbblHxLlAr5NyoybEpILJVUURcCxGGR+CZ5LZW/SH1Y
y2jCEIsuoI+Opdi16SpTaybiqX3mVyWH80A0n70/7yykXD94RCu3tgUB1R9f9tt1
yhkclg5OjeuQfmrgQ1CwvcD/Vrook9MAmadHI32+28cgI9zpkJI3oTH2AuYKNLJL
uQOoDMhOW6TM8WF7ghnRToBPUrarxB0wrpYCdQ1wZQKBgQC/KuKa5CCiUaSEh48j
dSYsj4f1eZ7PBCAxfLokvgj/6eGmAR6SOEX4lus9xnVhTgD1oePq3YFckgI0l4vI
oUQmgpEJnzSmFtrHzA0glQeFY1hipbapDG6TLSmttxo9UTBFg+2L+s8Q1GoGdyPa
ZxPGcWF9ogNh2T1Wq4fjoh5A1QKBgQC+TJUurxjPQs5rUbDQIUwjcSXI5537fVty
wUyEdl8HHj6fevaUUfGGLjwhX42JB7jigGJJNrsNlRILpPv+8T2gtA3ABDQzL14f
P31abaNsOOTAp5lZ57cDbQlkpKVd020B6hqOy6NRNsWZd3PC1QbSv4WEETUOexXQ
0eCCW0AncwKBgAFjclnlpkcHiMZdpbCAPVK9iCNESt7+DK3PVhrGNpKFRFpMT8iI
GBoCHptIQbn/MwqVrm4aRcJCXTm8kAtZAIG3GQ6U1XEPYW9qD/5YlsFlQ1MUGQuJ
R5RSE6drWQlw+YTHvIXzwGVC5bI+U0hWz1H1qNucvaGMTmG+xTHmD4oxAoGAB1ln
zYS/nYmD9UsTXAZdLWU6Q1cGl+bQeE8UyGzV4K1/V6NlEHdVr4vrkJJjIe6lakHx
CcjOUoj2SHLXtJHWgnVRrp+68Fsc9HH8QljHne9YjkQqvPkg7UXxvexJ4qS+qftD
iU4+AW3vFa0yUEzv1YXF/0K23NdOEWF5nS8u/BcCgYEAmeU7myKfGSXk8ptGdLDg
8r+Bn7gO4utRYJrtgHGgo1XROJ/9c/CZirOlTXUdyAGYcoPWH4ETCQahFvUkIJiX
jng9xMMpndlD5n9bU82Zb7AA/dhEz9XQBF7YBVy+RdG00hb5YgaNU7ErLs8ykE8z
wacI0Wr6SrkEf7Ms4OGpXtw=
-----END PRIVATE KEY-----`;
const senderPrivateKey = crypto.createPrivateKey(senderPrivateKeyPem);

const senderPublicKeyPem = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjhsEUQ2lqHd1k+YRXTgl
EA63RqaSo89tWMoh8yKCwK/DvQqa74kfl5HgG4KWXCOX+MilCY/ILv0hE32WAwZ2
kXaNJEVbZy6apsI8riu8hZalZ7oQ3wvQXp4vnMgXANkp1uH4egUJVGsQF1F8Sl8R
P7ZqZsOqskeGkSSigBbVWX6KaTvKnmKB5CMpX5JCbqnPOgzOWHRYptpHqrxb40UG
wzLPPcPI/jSfwEsfrHpXcn7ngWf7m2AgFD79X27QZaWJe5d4/yklfRXtL09+0fRR
3Pv48X8RfUQvLeGhHWvcHRRiB1dFrnh9JbaSFdjwntnIXGGkMwMLWj2+R026W7eS
rwIDAQAB
-----END PUBLIC KEY-----`;
const senderPublicKey = crypto.createPublicKey(senderPublicKeyPem);

// message that want to be encrypted
const message = "I want some apples";
const alicemessage = "alice message";
console.log("Plaintext:", message);

console.log(" ");

const dataencrypt = Buffer.from(message);
const ciphertext = crypto.publicEncrypt(recipientPublicKey, dataencrypt);
console.log("Alice Ciphertext:", ciphertext.toString("hex"));

const datasign = Buffer.from(message);
const signaturesign = crypto.sign("sha256", datasign, senderPrivateKey);
console.log("Alice Signature:", signaturesign.toString("hex"));

const aliceciphertesthex = ciphertext.toString("hex");
const ciphertextHex = "510cf4e276a5d824ec830fd8729808cf3200db4b26c6590f4e2d0f5694fde215f1a429346aea2c00866fc752b0d62a9387e1f36a1b0fdfd2be164c7bc178ac9bc3b6f488fdafdbb3ae871992257897ab3a3394c2e9384a32b0fa7eebfa51670f922bc21eabb966bee58e586779d8f8af2a387d199e02ea23483a4d3b29b4537fb112ec1c6ae34dd0fa5f0afbf15c3f0fdf96eef0777ee3bd6dd5cb377740185fe90e2f00b5646b92060d4622179b26b2a2045b448971f37507ec5d3aabc1747d6b5aec94a8f9456c050fd62df90a2707727c787368acf4f8dc02b18c83b5d51d568f3334f8f278218aa2b39d98d7877dadbd8e12f9149c9304704e9be5bebf1f";
const ciphertextdecrypt = Buffer.from(aliceciphertesthex, "hex");

console.log(" ");

const recoveredPlaintext = crypto.privateDecrypt(recipientPrivateKey, ciphertextdecrypt);
console.log("Bob Received Plaintext:", recoveredPlaintext.toString("utf8"));

const signatureHex = signaturesign.toString("hex");
const signatureverify = Buffer.from(signatureHex, "hex");

const dataverify = Buffer.from(message);

const isValid = crypto.verify("sha256", dataverify, senderPublicKey, signatureverify);
console.log("Bob Verified Signature:", isValid);