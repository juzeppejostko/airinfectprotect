/**
 * Author: Alexandre Chabeau
 * License: MIT
 * Contact: alexandrechabeau.pro@gmail.com
 * Original repos: https://github.com/saucyspray/scroll-parallax-js
 */
import { TweenMax, TimelineMax } from 'gsap'
import ScrollMagic from 'scrollmagic'
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap"
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)

const defaultOptions = {
    duration: '100%',
    triggerHook: 0,
    offset: 0,
    pinned: true,
    simultaneous: true,
    prefix: 'scrollparallaxjs'
}

class ScrollParallaxJS {
    constructor(_container, _custom, _options = defaultOptions) {
        this.cache(_container, _custom, _options)
        this.events()
        this.mounted()
    }

    cache(_container, _custom, _options) {
        // Setup container, options, & variables
        this.container = _container
        this.options = {..._options, ..._custom}

        if(this.testUpperCase(this.options.prefix)) {
            console.error('ScrollParallaxJS: prefix should be lowercase.')
        }
        this.wrapper = this.container.querySelector(`.${this.options.prefix}__wrapper`)
        if(!this.wrapper) {
            console.error('ScrollParallaxJS: can\'t find prefix wrapper.')
        }
        this.layers = [...this.wrapper.querySelectorAll(`.${this.options.prefix}__el`)]
        if(this.layers.length === 0) {
            console.error('ScrollParallaxJS: no parallax element found.')
        }


        this.tl = new TimelineMax()
    }

    testUpperCase(_string) {
        return /[A-Z]/.test(_string)
    }

    events() {
        
    }

    mounted() {
        // Create timelines for each parallax layers
        this.layers.forEach(layer => this.setLayersTimelines(layer))

        // Create scene & bind tl to it
        this.setScene()
    }

    setScene() {
        this.controller = new ScrollMagic.Controller()
        this.scene = new ScrollMagic.Scene({
            triggerElement: this.container,
            duration: this.options.duration,
            offset: this.options.offset,
            triggerHook: this.options.triggerHook
        })

        this.options.pinned ?
            this.scene.setPin(this.wrapper)
            : null

        this.scene.setTween(this.tl)

        this.scene.addTo(this.controller)
    }

    getAttributes(_el) {
        const attributes = [..._el.attributes]
        const sortedAttributes = {}

        // Check for each elements attributes if they contains "ScrollParallaxJS-" or "CustomPrefix-"
        attributes.forEach(attribute => {
            if(attribute.localName.includes(`${this.options.prefix}-`)) {
                if(attribute.localName.includes(`${this.options.prefix}-ease`)) {
                    console.error('ScrollParallaxJS: gsap ease not supported.')
                }
                // If they do, add the value to the sortedAttributes object
                Object.defineProperty(
                    sortedAttributes,
                    attribute.localName.replace(`${this.options.prefix}-`, ''),
                    {
                        value: attribute.value,
                        writable: false,
                        enumerable: true
                    }
                )
            }
        })

        return sortedAttributes
    }

    setLayersTimelines(_el) {
        // Get values from data attributes
        const attributes = this.getAttributes(_el)

        // Add to timeline
        this.tl.to(
            _el,
            attributes,
            this.options.simultaneous ?
                '-=1'
                : attributes.delay
        )
    }
}

export default ScrollParallaxJS