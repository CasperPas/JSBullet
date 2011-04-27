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

//package com.bulletphysics.util;

/**
 * Stack-based object pool, see the example for usage. You must use the {@link #returning}
 * method for returning stack-allocated instance.<p>
 * 
 * Example code:
 * 
 * <pre>
 * StackList&lt;Vector3f&gt; vectors;
 * ...
 * 
 * vectors.push();
 * try {
 *     Vector3f vec = vectors.get();
 *     ...
 *     return vectors.returning(vec);
 * }
 * finally {
 *     vectors.pop();
 * }
 * </pre>
 * 
 * @author jezek2
 */
var StackList = new Class({
	
	list: null,
	returnObj: null,
	
	stack: null,
	stackCount: 0,
	
	pos: 0,
	
	initialize: function(unused){
		this.list = new ObjectArrayList();
		this.stack = new Array();
		this.returnObj = this.create();
	},
	
	/**
	 * Pushes the stack.
	 */
	push: function() {
		/*if (stackCount == stack.length-1) {
			resizeStack();
		}*/
		
		this.stack[this.stackCount++] = pos;
	},

	/**
	 * Pops the stack.
	 */
	pop: function() {
		this.pos = this.stack[--this.stackCount];
	},
	
	/**
	 * Returns instance from stack pool, or create one if not present. The returned
	 * instance will be automatically reused when {@link #pop} is called.
	 * 
	 * @return instance
	 */
	get: function() {
		//if (true) return create();
		
		if (this.pos == this.list.length) {
			this.expand();
		}
		
		return this.list[this.pos++];
	},
	
	/**
	 * Copies given instance into one slot static instance and returns it. It's
	 * essential that caller of method (that uses this method for returning instances)
	 * immediately copies it into own variable before any other usage.
	 * 
	 * @param obj stack-allocated instance
	 * @return one slot instance for returning purposes
	 */
	returning: function(obj) {
		//if (true) { T ret = create(); copy(ret, obj); return ret; }
		
		this.copy(this.returnObj, obj);
		return this.returnObj;
	},
	
	/**
	 * Creates a new instance of type.
	 * 
	 * @return instance
	 */
	create: function(){
		return {};
	},
	
	/**
	 * Copies data from one instance to another.
	 * 
	 * @param dest
	 * @param src
	 */
	copy: function(dest, src){
		dest = src;
	},

	expand: function() {
		this.list.push(this.create());
	}
	
});
