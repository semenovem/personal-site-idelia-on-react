import React from 'react';
import cn from 'classnames';

import { withCtxMusicPlayer, IMusicPlayerProps } from 'ctx/MusicPlayer';

import css from './style.module.css';

interface IOwnProps {
  className?: string;
  urlCover?: string;
  active?: boolean;
  isPause?: boolean;
  offTabIndex?: boolean;
  htmlId: string;

  /**
   * handler event play
   */
  onPlay(): void;

  /**
   * handler event pause or stop
   */
  onPause?(): void;


  src: string;
}

type Props = IOwnProps & IMusicPlayerProps;

class VideoPlayerYoutube extends React.Component<Props> {
  static isLoadedScriptApi: Promise<void>;

  /**
   * not yet used
   */
  static loadScriptApi(): Promise<void> {
    if (VideoPlayerYoutube.isLoadedScriptApi) {
      return VideoPlayerYoutube.isLoadedScriptApi;
    }

    VideoPlayerYoutube.isLoadedScriptApi = new Promise((resolve, reject) => {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";

      tag.onerror = reject;

      // @ts-ignore
      window.onYouTubeIframeAPIReady = resolve;

      const firstEl = document.getElementsByTagName('script')[0];
      firstEl.parentNode!.insertBefore(tag, firstEl);
    })
      .then(() => {})
      .catch(e => {
        console.error('failed to load api script: "https://www.youtube.com/iframe_api"');
        throw e;
      });

    return VideoPlayerYoutube.isLoadedScriptApi;
  }

  mount = false;

  refEl: any;

  player: any;

  constructor(props: Props) {
    super(props);
    VideoPlayerYoutube.loadScriptApi();
    this.refEl = React.createRef();
    this.mount = true;
  }

  public componentDidMount() {
   VideoPlayerYoutube.isLoadedScriptApi.then(this.createPlayer);
  }

  public componentDidUpdate(prevProps: Props): void {
    const { musicPlayer: { isPlay } } = this.props;
    if (isPlay !== prevProps.musicPlayer.isPlay && isPlay && this.player && this.player.pauseVideo) {

      this.player.pauseVideo();
    }
  }

  public componentWillUnmount(): void {
    this.mount = false;
  }

  private createPlayer = () => {
    if (!this.mount) {
      return;
    }

    // @ts-ignore
    this.player = new window.YT.Player(this.refEl.current, {
      events: {
        'onStateChange': this.handlePlayerStateChange
      }
    });
  };

  private handlePlayerStateChange = (event: any) => {
    // @ts-ignore
    if (event.data === window.YT.PlayerState.PLAYING) {
      this.props.onPlay();
    }
  };


  public render() {
    const { urlCover, className, src, htmlId } = this.props;
    const style = {...urlCover && {backgroundImage: urlCover}};

    return (
      <div
        className={cn(css.videoPlayer, className)}
        style={style}
      >

        {/*<img src={urlCover} className={css.img} alt=''/>*/}

        <iframe
          title="youtube"
          id={htmlId}
          ref={this.refEl}
          className={css.iframe}
          src={src}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />

      </div>
    );
  }
}

export default withCtxMusicPlayer<IOwnProps>(VideoPlayerYoutube);
