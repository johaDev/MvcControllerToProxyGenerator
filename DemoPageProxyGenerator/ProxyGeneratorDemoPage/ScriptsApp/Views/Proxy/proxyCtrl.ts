﻿module App.Views.Proxy {
    
    export class ProxyCtrl {
        static $inject = [
            App.Services.ProxyPSrv.module.name, //Ts Service
            App.Services.HomePSrv.module.name, //Ts Service
            "homePJsSrv", //Js Service
            "proxyPJsSrv" //Js Service
        ];

        constructor(private proxyTsSrv: App.Services.IProxyPSrv,
            private homeTsSrv: App.Services.IHomePSrv,
            private homeJsSrv: any,
            private proxyJsSrv: any) {
            this.init();
        }

        /**
        * Initialisieren der wichtigsten lokalen Variablen
        */
        init(): void {
        }

        public startJavaScriptServiceCalls() {
            var person: ProxyGeneratorDemoPage.Models.Person.Models.IPerson = new Person(16667, "SquadJs", new Date(), "Wuschel", true);
            var auto: ProxyGeneratorDemoPage.Models.Person.Models.IAuto = new Auto("BMW Js", 12, person);
            console.clear();
            console.log("Some JavaScript Angular Service Calls: \r\n");

            this.proxyJsSrv.addJsEntryOnly(person).then(result => {
                console.log("\r\nSuccess JavaScript Service Call 'addJsEntryOnly' Result: ");
                console.log(result);
            });

            this.proxyJsSrv.addJsEntryAndName(person, "Wuschel").then(result => {
                console.log("\r\nSuccess JavaScript Service Call 'addJsEntryAndName' Result: ");
                console.log(result);
            });

            this.proxyJsSrv.addJsEntryAndParams(person, "Squad", "Wuschel").then(result => {
                console.log("\r\nSuccess JavaScript Service Call 'addJsEntryAndParams' Result: ");
                console.log(result);
            });

            this.proxyJsSrv.clearJsCall().then(result => {
                console.log("\r\nSuccess JavaScript Service Call 'clearJsCall' Result: ");
                console.log(result);
            });

            this.proxyJsSrv.loadJsCallById(1337).then(result => {
                console.log("\r\nSuccess JavaScript Service Call 'loadJsCallById' Result: ");
                console.log(result);
            });

            this.proxyJsSrv.loadJsCallByParamsAndId("Squad", "Wuschel", 34, 1337).then(result => {
                console.log("\r\nSuccess JavaScript Service Call 'loadJsCallByParamsAndId' Result: ");
                console.log(result);
            });
        }

        public startTypeScriptServiceCalls() {
            var person: ProxyGeneratorDemoPage.Models.Person.Models.IPerson = new Person(1337, "Squad", new Date(), "Wuschel", true);
            var auto: ProxyGeneratorDemoPage.Models.Person.Models.IAuto = new Auto("BMW", 5, person);

             console.clear();
             console.log("Some TypeScript Angular Service Calls: \r\n");

             this.proxyTsSrv.addTsEntryAndName(person, "Johannes").then(result => {
                 console.log("\r\nSuccess TypeScript Service Call 'addTsEntryAndName' Result: ");
                 console.log(result);
             });

             this.proxyTsSrv.addTsEntryAndParams(person, "Squad", "Wuschel").then(result => {
                 console.log("\r\nSuccess TypeScript Service Call 'addTsEntryAndParams' Result: ");
                 console.log(result);
             });

             this.proxyTsSrv.addTsEntryOnly(person).then(result => {
                 console.log("\r\nSuccess TypeScript Service Call 'addTsEntryOnly' Result: ");
                 console.log(result);
             });

             this.proxyTsSrv.boolTsReturnType(true).then(result => {
                 console.log("\r\nSuccess TypeScript Service Call 'boolTsReturnType' Result: ");
                 console.log(result);
             });

             this.proxyTsSrv.clearTsCall().then(result => {
                 console.log("\r\nSuccess TypeScript Service Call 'clearTsCall' Result: ");
                 console.log(result);
             });

             this.proxyTsSrv.dateTsReturnType("SquadWuschel").then(result => {
                 console.log("\r\nSuccess TypeScript Service Call 'dateTsReturnType' Result: ");
                 console.log(result);
             });

             this.proxyTsSrv.integerTsReturnType(1337).then(result => {
                 console.log("\r\nSuccess TypeScript Service Call 'integerTsReturnType' Result: ");
                 console.log(result);
             });

             this.proxyTsSrv.loadAllAutosArray("SquadWuschel").then(result => {
                 console.log("\r\nSuccess TypeScript Service Call 'loadAllAutosArray' Result: ");
                 console.log(result);
             });

             this.proxyTsSrv.loadAllAutosListe("SquadWuschel").then(result => {
                 console.log("\r\nSuccess TypeScript Service Call 'loadAllAutosListe' Result: ");
                 console.log(result);
             });

             this.proxyTsSrv.loadTsCallById(16667).then(result => {
                 console.log("\r\nSuccess TypeScript Service Call 'loadTsCallById' Result: ");
                 console.log(result);
             });

             this.proxyTsSrv.loadTsCallByParams("Squad", "Wuschel", 33).then(result => {
                 console.log("\r\nSuccess TypeScript Service Call 'loadTsCallByParams' Result: ");
                 console.log(result);
             });

             this.proxyTsSrv.loadTsCallByParamsAndId("Squad", "Wuschel", 33, 1337).then(result => {
                 console.log("\r\nSuccess TypeScript Service Call 'loadTsCallByParamsAndId' Result: ");
                 console.log(result);
             });

             this.proxyTsSrv.loadTsCallByParamsWithEnum("Squad", "Wuschel", 33, ProxyGeneratorDemoPage.Helper.ClientAccess.Admin).then(result => {
                 console.log("\r\nSuccess TypeScript Service Call 'loadTsCallByParamsAndId' Result: ");
                 console.log(result);
             });
         }

        //#region Angular Module Definition
        private static _module: ng.IModule;
        /**
         * Stellt das aktuelle Angular Modul für den "Proxy" bereit.
         */
        public static get module(): ng.IModule {
            if (this._module) {
                return this._module;
            }

            //Hier die abhängigen Module für diesen controller definieren, damit brauchen wir von außen nur den Controller einbinden
            //und müssen seine Abhängkeiten nicht wissen.
            this._module = angular.module('proxyCtrl', []);
            this._module.controller('proxyCtrl', ProxyCtrl);
            return this._module;
        }
        //#endregion
    }
}
