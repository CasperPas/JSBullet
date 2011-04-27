/*
 * Java port of Bullet (c) 2008 Martin Dvorak <jezek2@advel.cz>
 *
 * Bullet Continuous Collision Detection and Physics Library
 * Copyright (c) 2003-2008 Erwin Coumans  http://www.bulletphysics.com/
 *
 * This software is provided 'as-is', without any express or implied warranty.
 * In no event will the authors be held liable for any damages arising from
 * the use of this software.
 * 
 * Permission is granted to anyone to use this software for any purpose, 
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 * 
 * 1. The origin of this software must not be misrepresented; you must not
 *    claim that you wrote the original software. If you use this software
 *    in a product, an acknowledgment in the product documentation would be
 *    appreciated but is not required.
 * 2. Altered source versions must be plainly marked as such, and must not be
 *    misrepresented as being the original software.
 * 3. This notice may not be removed or altered from any source distribution.
 */
/*
package com.bulletphysics;

import com.bulletphysics.util.ArrayPool;
import com.bulletphysics.util.ObjectPool;
*/

var Float = {};
Float.MAX_VALUE = 999999999999999;

var BulletGlobals = new Class({
	
	DEBUG: false,
	
	CONVEX_DISTANCE_MARGIN: 	0.04f,
	FLT_EPSILON: 				1.19209290e-07f,
	SIMD_EPSILON: 				FLT_EPSILON,
	
	SIMD_2_PI: 					6.283185307179586232f,
	SIMD_PI: 					SIMD_2_PI * 0.5f,
	SIMD_HALF_PI: 				SIMD_2_PI * 0.25f,
	SIMD_RADS_PER_DEG: 			SIMD_2_PI / 360f,
	SIMD_DEGS_PER_RAD: 			360f / SIMD_2_PI,
	SIMD_INFINITY: 				Float.MAX_VALUE,
	contactBreakingThreshold: 	0.02f,

	
	// RigidBody
	deactivationTime: 2f,
	disableDeactivation: false,
	////////////////////////////////////////////////////////////////////////////

	initialize: function(){
		
	},

	gContactDestroyedCallback: $empty,
	
	gContactAddedCallback: $empty,
	
	gContactProcessedCallback: $empty,

	
	getContactAddedCallback: function() {
		return this.gContactAddedCallback;
	},

	setContactAddedCallback: function(callback) {
		this.gContactAddedCallback = callback;
	},

	getContactDestroyedCallback: function() {
		return this.gContactDestroyedCallback;
	},

	setContactDestroyedCallback: function(callback) {
		this.gContactDestroyedCallback = callback;
	},

	getContactProcessedCallback: function() {
		return this.gContactProcessedCallback;
	},

	setContactProcessedCallback: function(callback) {
		this.gContactProcessedCallback = callback;
	},
	
	////////////////////////////////////////////////////////////////////////////

	getContactBreakingThreshold: function() {
		return this.contactBreakingThreshold;
	},

	setContactBreakingThreshold: function(threshold) {
		this.contactBreakingThreshold = threshold;
	},

	getDeactivationTime: function() {
		return this.deactivationTime;
	},

	setDeactivationTime: function(time) {
		this.deactivationTime = time;
	},

	isDeactivationDisabled: function() {
		return this.disableDeactivation;
	},

	setDeactivationDisabled: function(disable) {
		this.disableDeactivation = disable;
	},

	////////////////////////////////////////////////////////////////////////////

	/**
	 * Cleans all current thread specific settings and caches.
	 */
	cleanCurrentThread: function() {
		/*
		threadLocal.remove();
		Stack.libraryCleanCurrentThread();
		ObjectPool.cleanCurrentThread();
		ArrayPool.cleanCurrentThread();
		*/
	}

});