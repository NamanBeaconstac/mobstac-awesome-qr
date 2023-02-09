import 'mocha';
import { CanvasType, DataPattern, EyeBallShape, EyeFrameShape, GradientType, QRCodeFrame, QRErrorCorrectLevel } from '../Enums';
import { QRCodeBuilder } from '../index';
import { QRCode } from '../Models';

// tslint:disable-next-line:no-var-requires
const fs = require('fs');

const svgLogo = 'https://d1bqobzsowu5wu.cloudfront.net/21660/bf7654bc97224acba11e9b4448f2671d';
const pngLogo = 'https://d1bqobzsowu5wu.cloudfront.net/72074/bcda8a37fb954460a135195856af9d64';

const logoURL = svgLogo;

const rect1024 = {
    text: 'https://beaconstac.com',
    logoImage: logoURL,
    backgroundColor:'',
    logoBackground: true,
    colorDark: '#b3365b',
    canvasType: CanvasType.SVG,
    dotScale: 0.9,
    logoScale: 0.24,
    rectangular: true,
    logoWidth: 1800,
    logoHeight: 1900,
    margin: 80,
    size:1024,
};

const square1024 = {
    text: 'https://beaconstac.com',
    logoImage: logoURL,
    backgroundColor:'',
    logoBackground: true,
    colorDark: '#b3365b',
    canvasType: CanvasType.SVG,
    dotScale: 0.9,
    logoScale: 0.24,
    rectangular: false,
    logoWidth: 1800,
    logoHeight: 1900,
    margin: 80,
    size:1024,
};

const square512 = {
    text: 'https://beaconstac.com',
    logoImage:logoURL,
    backgroundColor:'',
    logoBackground: true,
    colorDark: '#b3365b',
    canvasType: CanvasType.SVG,
    dotScale: 0.9,
    logoScale: 0.24,
    rectangular: false,
    logoWidth: 1800,
    logoHeight: 1900,
    margin: 80,
    size:512,
};

const rect512 = {
    text: 'https://beaconstac.com',
    logoImage:logoURL,
    backgroundColor:'',
    logoBackground: true,
    colorDark: '#b3365b',
    canvasType: CanvasType.SVG,
    dotScale: 0.9,
    logoScale: 0.24,
    rectangular: true,
    logoWidth: 1800,
    logoHeight: 1900,
    margin: 80,
    size:512,
};

const rect2048 = {
    text: 'https://beaconstac.com',
    logoImage:logoURL,
    backgroundColor:'',
    logoBackground: true,
    colorDark: '#b3365b',
    canvasType: CanvasType.SVG,
    dotScale: 0.9,
    logoScale: 0.24,
    rectangular: true,
    logoWidth: 1800,
    logoHeight: 1900,
    margin: 80,
    size:2048,
};

const square2048 = {
    text: 'https://beaconstac.com',
    logoImage:logoURL,
    backgroundColor:'',
    logoBackground: true,
    colorDark: '#b3365b',
    canvasType: CanvasType.SVG,
    dotScale: 0.9,
    logoScale: 0.24,
    rectangular: false,
    logoWidth: 1800,
    logoHeight: 1900,
    margin: 80,
    size:2048,
};

const rect4096 = {
    text: 'https://beaconstac.com',
    logoImage:logoURL,
    backgroundColor:'',
    logoBackground: true,
    colorDark: '#b3365b',
    canvasType: CanvasType.SVG,
    dotScale: 0.9,
    logoScale: 0.24,
    rectangular: true,
    logoWidth: 1800,
    logoHeight: 1900,
    margin: 80,
    size:4096,
};

const square4096 = {
    text: 'https://beaconstac.com',
    logoImage:logoURL,
    backgroundColor:'',
    logoBackground: true,
    colorDark: '#b3365b',
    canvasType: CanvasType.SVG,
    dotScale: 0.9,
    logoScale: 0.24,
    rectangular: false,
    logoWidth: 1800,
    logoHeight: 1900,
    margin: 80,
    size:4096,
};


describe('QR code Logo main test', () => {
    // logo tests for size: 1024
    it('Logo test SVG rectangular 1024', done => {
        const qrCodeGenerator = new QRCodeBuilder(rect1024);
        qrCodeGenerator.build(CanvasType.SVG).then(qrCode => {
            fs.writeFileSync(__dirname + '/logoTests/rect_1024.' + CanvasType.SVG.toLowerCase(), qrCode.toBuffer());
            done();
        }).catch(err => {
            console.error(err);
            done();
        });
    });
    it('Logo test SVG square 1024', done => {
        const qrCodeGenerator = new QRCodeBuilder(square1024);
        qrCodeGenerator.build(CanvasType.SVG).then(qrCode => {
            fs.writeFileSync(__dirname + '/logoTests/square_1024.' + CanvasType.SVG.toLowerCase(), qrCode.toBuffer());
            done();
        }).catch(err => {
            console.error(err);
            done();
        });
    });
    // logo tests for size: 512
    it('Logo test SVG rectangular 512', done => {
        const qrCodeGenerator = new QRCodeBuilder(rect512);
        qrCodeGenerator.build(CanvasType.SVG).then(qrCode => {
            fs.writeFileSync(__dirname + '/logoTests/rect_512.' + CanvasType.SVG.toLowerCase(), qrCode.toBuffer());
            done();
        }).catch(err => {
            console.error(err);
            done();
        });
    });
    it('Logo test SVG square 512', done => {
        const qrCodeGenerator = new QRCodeBuilder(square512);
        qrCodeGenerator.build(CanvasType.SVG).then(qrCode => {
            fs.writeFileSync(__dirname + '/logoTests/square_512.' + CanvasType.SVG.toLowerCase(), qrCode.toBuffer());
            done();
        }).catch(err => {
            console.error(err);
            done();
        });
    });
    // logo tests for size: 2048
    it('Logo test SVG rectangular 2048', done => {
        const qrCodeGenerator = new QRCodeBuilder(rect2048);
        qrCodeGenerator.build(CanvasType.SVG).then(qrCode => {
            fs.writeFileSync(__dirname + '/logoTests/rect_2048.' + CanvasType.SVG.toLowerCase(), qrCode.toBuffer());
            done();
        }).catch(err => {
            console.error(err);
            done();
        });
    });
    it('Logo test SVG square 2048', done => {
        const qrCodeGenerator = new QRCodeBuilder(square2048);
        qrCodeGenerator.build(CanvasType.SVG).then(qrCode => {
            fs.writeFileSync(__dirname + '/logoTests/square_2048.' + CanvasType.SVG.toLowerCase(), qrCode.toBuffer());
            done();
        }).catch(err => {
            console.error(err);
            done();
        });
    });
    // logo tests for size: 4096
    it('Logo test SVG rectangular 4096', done => {
        const qrCodeGenerator = new QRCodeBuilder(rect4096);
        qrCodeGenerator.build(CanvasType.SVG).then(qrCode => {
            fs.writeFileSync(__dirname + '/logoTests/rect_4096.' + CanvasType.SVG.toLowerCase(), qrCode.toBuffer());
            done();
        }).catch(err => {
            console.error(err);
            done();
        });
    });
    it('Logo test SVG square 4096', done => {
        const qrCodeGenerator = new QRCodeBuilder(square4096);
        qrCodeGenerator.build(CanvasType.SVG).then(qrCode => {
            fs.writeFileSync(__dirname + '/logoTests/square_4096.' + CanvasType.SVG.toLowerCase(), qrCode.toBuffer());
            done();
        }).catch(err => {
            console.error(err);
            done();
        });
    });
});
