/**
 * Economy Module
 * 
 * This module provides economy-related functionality with improved structure,
 * error handling, and extensibility.
 */

(function(global) {
    'use strict';
    
    const Economy = {
        /**
         * Initialize economy system
         * @param {Object} [config] - Configuration options
         * @returns {void}
         */
        init: function(config = {}) {
            try {
                this.config = {
                    debug: config.debug || false,
                    currency: config.currency || 'coins',
                    ...config
                };

                if (this.config.debug) {
                    console.log("Economy system initialized with config:", this.config);
                }
            } catch (error) {
                console.error("Economy initialization failed:", error);
            }
        },

        /**
         * Get current configuration
         * @returns {Object} Current configuration
         */
        getConfig: function() {
            return {...this.config};
        }
    };

    // Initialize when DOM is ready
    const init = () => Economy.init();
    
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(init, 0);
    } else {
        document.addEventListener('DOMContentLoaded', init);
    }
    
    // Export for module usage
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Economy;
    } else if (typeof define === 'function' && define.amd) {
        define([], () => Economy);
    } else {
        global.Economy = Economy;
    }
})(typeof window !== 'undefined' ? window : this);