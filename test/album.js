import { expect } from 'chai';
import Tidal from '../src';

const tidal = new Tidal();

describe('getAlbum', () => {

  it('should return the correct album object', async () => {
    const album = await tidal.getAlbum(80216363);

    expect(album).to.be.an('object')
      .and.to.include({ id: 80216363 });

  });

});

describe('getAlbumTracks', () => {

  it('should return an array with the correct number of track objects', async () => {
    const tracks = await tidal.getAlbumTracks(80216363);
    expect(tracks).to.be.an('array')
      .and.to.have.lengthOf(10);

    expect(tracks[0]).to.have.property('trackNumber');

  });

});
