/*
 * File: app/view/Main.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('FriendsWithBeer.view.Main', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.main',

    requires: [
        'FriendsWithBeer.view.Introduction',
        'FriendsWithBeer.view.beer.Beer',
        'Ext.Video',
        'Ext.Map',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Number',
        'Ext.field.Email',
        'Ext.field.Select',
        'Ext.field.Text',
        'Ext.XTemplate',
        'Ext.layout.HBox',
        'Ext.layout.VBox',
        'Ext.layout.Card',
        'Ext.Button',
        'Ext.Container',
        'Ext.layout.Fit'
    ],

    config: {
        items: [
            {
                xtype: 'intro',
                title: 'About',
                iconCls: 'info'
            },
            {
                xtype: 'container',
                title: 'Friends',
                iconCls: 'user_list',
                itemId: 'friends',
                layout: {
                    animation: 'fade',
                    type: 'card'
                },
                items: [
                    {
                        xtype: 'titlebar',
                        docked: 'top',
                        itemId: 'friendstoolbar',
                        title: 'Friends with Beer',
                        items: [
                            {
                                xtype: 'button',
                                align: 'right',
                                itemId: 'btnAddFriend',
                                iconCls: 'user_add',
                                iconMask: true
                            },
                            {
                                xtype: 'button',
                                hidden: true,
                                itemId: 'btnBackToFriendList',
                                ui: 'back',
                                text: 'Back'
                            }
                        ]
                    },
                    {
                        xtype: 'list',
                        itemId: 'friendsList',
                        emptyText: 'No Records Found',
                        itemTpl: [
                            '{lastName}, {firstName}<br />{favoriteBeer}'
                        ],
                        store: 'Friends',
                        grouped: true,
                        onItemDisclosure: true,
                        indexBar: true
                    },
                    {
                        xtype: 'formpanel',
                        fieldDefaults: {
                            labelWidth: 150
                        },
                        itemId: 'friendForm',
                        scrollable: {
                            direction: 'vertical',
                            directionLock: true
                        },
                        items: [
                            {
                                xtype: 'fieldset',
                                title: 'Contact',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        label: 'Last Name',
                                        name: 'lastName',
                                        required: true,
                                        autoCapitalize: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: 'First Name',
                                        name: 'firstName',
                                        required: true,
                                        autoCapitalize: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: 'Address',
                                        name: 'address',
                                        required: true
                                    },
                                    {
                                        xtype: 'numberfield',
                                        label: 'Zip',
                                        name: 'zip',
                                        required: true
                                    },
                                    {
                                        xtype: 'emailfield',
                                        label: 'Email',
                                        name: 'email',
                                        required: true,
                                        placeHolder: 'email@example.com'
                                    },
                                    {
                                        xtype: 'textfield',
                                        component: {
                                            xtype: 'input',
                                            type: 'tel'
                                        },
                                        label: 'Phone',
                                        name: 'phone',
                                        required: true
                                    }
                                ]
                            },
                            {
                                xtype: 'textfield',
                                label: 'Lat',
                                name: 'lat',
                                required: true,
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                label: 'Lng',
                                name: 'lng',
                                required: true,
                                readOnly: true
                            },
                            {
                                xtype: 'selectfield',
                                label: 'Favorite Beer',
                                name: 'favoriteBeer',
                                displayField: 'name',
                                store: 'Beers',
                                valueField: 'name'
                            },
                            {
                                xtype: 'container',
                                itemId: 'buttonContainer',
                                margin: 5,
                                defaults: {
                                    ui: 'amberBeerButton'
                                },
                                layout: {
                                    type: 'hbox'
                                },
                                items: [
                                    {
                                        xtype: 'button',
                                        flex: 1,
                                        itemId: 'btnGeoCode',
                                        margin: '0 5 0 0',
                                        text: 'Geo'
                                    },
                                    {
                                        xtype: 'button',
                                        flex: 1,
                                        itemId: 'btnSaveContact',
                                        margin: '0 5 0 0',
                                        text: 'Save'
                                    },
                                    {
                                        xtype: 'button',
                                        flex: 1,
                                        itemId: 'btnDeleteContact',
                                        margin: 0,
                                        text: 'Delete'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'beer',
                title: 'Beers',
                iconCls: 'search'
            },
            {
                xtype: 'container',
                title: 'Beer Me!',
                iconCls: 'phone_ring1',
                itemId: 'friendrandomizer',
                layout: {
                    type: 'fit'
                },
                items: [
                    {
                        xtype: 'titlebar',
                        docked: 'top',
                        title: 'Friend Randomizer'
                    }
                ]
            },
            {
                xtype: 'container',
                title: 'Drink',
                iconCls: 'tv',
                itemId: 'friendsvideo',
                layout: {
                    align: 'center',
                    pack: 'center',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'titlebar',
                        docked: 'top',
                        title: 'Drink with Friends'
                    },
                    {
                        xtype: 'video',
                        autoResume: true,
                        loop: true,
                        muted: false,
                        url: 'http://webapps.figleaf.com/arch101/friends.mp4',
                        posterUrl: 'http://webapps.figleaf.com/arch101/friends.png'
                    }
                ]
            }
        ],
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center',
                type: 'hbox'
            }
        }
    }

});