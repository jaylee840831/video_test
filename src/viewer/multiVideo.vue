<template>
    <div id="container" style="width: 600px; margin: 0 auto;">

        <!-- <div v-for="(item, index) in videoList" :key="index">
            video id: {{ item.id }}
            <video width="100%" controls autoplay id="player"></video>
        </div> -->
    </div>
</template>

<script>
import JMuxer from 'jmuxer';

export default {
  name: 'multiVideo',
  data () {
    return {
        hi: 'hi',
        videoList:[
            {
                id:'01',
                stream:''
            },
            {
                id:'02',
                stream:''
            },
            {
                id:'03',
                stream:''
            },
            {
                id:'04',
                stream:''
            },
            {
                id:'05',
                stream:''
            },
            {
                id:'06',
                stream:''
            },
            {
                id:'07',
                stream:''
            },
            {
                id:'08',
                stream:''
            },
            {
                id:'09',
                stream:''
            },
            {
                id:'10',
                stream:''
            }
        ]
    }
  },
  methods: {
    async liveVideo () {
        const jmuxer = new JMuxer({
              node: 'player',
              debug: true
            })

        /* Now feed media data using feed method. audio and video is buffer data and duration is in milliseconds */
        jmuxer.feed({
            audio: audio,
            video: video,
            duration: duration
        })
    }
  },
  async mounted () {
    this.liveVideo()
  }
}

</script>

<style scoped>
    .file-input {
        padding: 20px 10px;
        background: #f7f7f7;
        border: 1px solid #9a9a9a;
        margin-bottom: 10px;
    }
    .meta-info {
        display: flex;
        background: #f7f7f7;
        border: 1px solid #9a9a9a;
        margin-bottom: 10px;
        padding: 10px;
    }
    .or-column {
        width: 40px;
        text-align: center;
        color: #085a94fa;
        text-transform: uppercase;
        font-size: 17px;
        font-weight: bold;
    }
    .meta-info input {
        padding: 5px;
        outline: 0;
    }
    #play-btn {
        background: #3498db;
        color: #fff;
        padding: 7px;
        width: 100%;
        border: 1px solid #0880d0;
        font-size: 15px;
        text-transform: uppercase;
        margin-bottom: 10px;
        cursor: pointer;
    }
    #play-btn:hover {
    background: #05568c;
    }
    .github-tools {
        position: absolute;
        top: 15px;
        right: 15px;
    }
    .gesture {
            font-size: 15px;
            color: #ad4903;
            margin-top: 10px;
        }
</style>