﻿using System;
using System.Collections.Generic;
using System.Configuration;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Web.Configuration;
using ProxyGenerator.Container;
using ProxyGenerator.Interfaces;

namespace ProxyGenerator.Manager
{
    public class SettingsManager : ISettingsManager
    {
        public ProxySettings ProxySettings { get; set; }

        public SettingsManager(ProxySettings settings)
        {
            ProxySettings = settings;
        }

        /// <summary>
        /// Laden der Einstellungen aus der Web.Config. Nur wenn die Einstellungen dort existieren
        /// </summary>
        public void LoadSettingsFromWebConfig()
        {
            try
            {
                var map = new ExeConfigurationFileMap();
                map.ExeConfigFilename = ProxySettings.WebConfigPath;
                var configFile = ConfigurationManager.OpenMappedExeConfiguration(map, ConfigurationUserLevel.None);
                var allSettings = configFile.AppSettings.Settings;

                if (allSettings.AllKeys.Contains("ProxyGenerator_WebProjectName"))
                {
                    ProxySettings.WebProjectName = allSettings["ProxyGenerator_WebProjectName"].Value;
                }

                if (allSettings.AllKeys.Contains("ProxyGenerator_ProxyFileOutputPath"))
                {
                    ProxySettings.ProxyFileOutputPath = allSettings["ProxyGenerator_ProxyFileOutputPath"].Value;
                }

                if (allSettings.AllKeys.Contains("ProxyGenerator_LowerFirstCharInFunctionName"))
                {
                    ProxySettings.LowerFirstCharInFunctionName = bool.Parse(allSettings["ProxyGenerator_LowerFirstCharInFunctionName"].Value);
                }

                if (allSettings.AllKeys.Contains("ProxyGenerator_TypeLiteInterfacePrefix"))
                {
                    ProxySettings.TypeLiteInterfacePrefix = allSettings["ProxyGenerator_TypeLiteInterfacePrefix"].Value;
                }
            }
            catch (Exception exception)
            {
                Debug.WriteLine("Error Reading Settings from Web.config | Message: " + exception.Message);
            }
        }
    }
}