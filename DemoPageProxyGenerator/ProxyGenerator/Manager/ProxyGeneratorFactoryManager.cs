﻿using ProxyGenerator.Builder;
using ProxyGenerator.Builder.Helper;
using ProxyGenerator.Container;
using ProxyGenerator.Interfaces;

namespace ProxyGenerator.Manager
{
    public class ProxyGeneratorFactoryManager : IProxyGeneratorFactoryManager
    {
        #region Member
        private ProxySettings ProxySettings { get; set; }
        #endregion

        #region Konstruktor
        public ProxyGeneratorFactoryManager(ProxySettings proxySettings)
        {
            ProxySettings = proxySettings;
        }
        #endregion

        #region Creator Functions
        public IAssemblyManager CreateAssemblyManager()
        {
            return new AssemblyManager();
        }

        public IControllerManager CreateControllerManager()
        {
            return new ControllerManager(this);
        }

        public IMethodManager CreateMethodManager()
        {
            return new MethodManager(this);
        }

        public IMethodParameterManager CreateMethodParameterManager()
        {
            return new MethodParameterManager();
        }

        public IProxyBuilderHelper CreateProxyBuilderHelper()
        {
            return new ProxyBuilderHelper(ProxySettings);
        }

        public IProxyBuilderHttpCall CreateProxyBuilderHttpCall()
        {
            return new ProxyBuilderHttpCall(this);
        }

        public IAngularTsProxyBuilder CreateAngularTsProxyBuilder()
        {
            return  new AngularTsProxyBuilder(this);
        }

        public IProxyBuilderTypeHelper CreateBuilderTypeHelper()
        {
            return new ProxyBuilderTypeHelper(ProxySettings);
        }
        #endregion

        #region Public Functions
        public ProxySettings GetProxySettings()
        {
            return ProxySettings;
        }
        #endregion

        #region ProxyBuilder Creator
        public IAngularJsProxyBuilder CreateAngularJsProxyBuilder()
        {
            return new AngularJsProxyBuilder(this);
        }
        #endregion
    }
}   