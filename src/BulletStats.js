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

import com.bulletphysics.linearmath.CProfileManager;
import com.bulletphysics.linearmath.Clock;
import javax.vecmath.Vector3f;
*/
/**
 * Bullet statistics and profile support.
 * 
 * @author jezek2
 */
var BulletStats = new Class({
	
	gTotalContactPoints: 0,
	
	// GjkPairDetector
	// temp globals, to improve GJK/EPA/penetration calculations
	gNumDeepPenetrationChecks: 0,
	gNumGjkChecks: 0,
	gNumSplitImpulseRecoveries: 0,
	
	gNumAlignedAllocs: 0,
	gNumAlignedFree: 0,
	gTotalBytesAlignedAllocs: 0,
	
	gPickingConstraintId: 0,
	gOldPickingPos: new Vector3f(),
	gOldPickingDist: 0.f,
	
	gOverlappingPairs: 0,
	gRemovePairs: 0,
	gAddedPairs: 0,
	gFindPairs: 0,
	
	gProfileClock: new Clock(),

	// DiscreteDynamicsWorld:
	gNumClampedCcdMotions: 0,

	// JAVA NOTE: added for statistics in applet demo
	stepSimulationTime: 1/60,
	updateTime: 0,
	
	enableProfile: false,
	
	////////////////////////////////////////////////////////////////////////////
	
	isProfileEnabled: function() {
		return this.enableProfile;
	}

	setProfileEnabled: function(b) {
		this.enableProfile = b;
	}
	
	profileGetTicks: function() {
		ticks = this.gProfileClock.getTimeMicroseconds();
		return ticks;
	}

	profileGetTickRate: function() {
		//return 1000000f;
		return 1000f;
	}
	
	/**
	 * Pushes profile node. Use try/finally block to call {@link #popProfile} method.
	 * 
	 * @param name must be {@link String#intern interned} String (not needed for String literals)
	 */
	pushProfile: function(name) {
		if (this.enableProfile) {
			CProfileManager.startProfile(name);
		}
	}
	
	/**
	 * Pops profile node.
	 */
	popProfile: function() {
		if (this.enableProfile) {
			CProfileManager.stopProfile();
		}
	}
	
});
