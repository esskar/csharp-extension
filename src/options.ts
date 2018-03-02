﻿import { TypeNameProvider } from '@yellicode/templating';

export interface WriterOptions {
    /**
     * The maximum width of generated documentation comments before they are word-wrapped.
     * The default value is 100 characters.
     */
    maxCommentWidth?: number;
    /**
     * Sets an optional TypeNameProvider. By default, the CSharpTypeNameProvider is used.
     */
    typeNameProvider?: TypeNameProvider;
}

/**
 * Enumerates the possible collection types to generated for properties and parameters.
 */
export enum CollectionType {
    ICollection,
    IEnumerable,
    IList
}

export enum NamespaceFeatures {
    None = 0,
    XmlDocSummary = 1 << 0,
    All = XmlDocSummary
}

export interface NamespaceOptions {
    /**
     * Defines the namespace features to write. The default is NamespaceFeatures.All.
     */
    features?: NamespaceFeatures;
    /**
     * Indicates if the fully-qualified namespace name should be written instead of only the current one.
     * The full name will be created from the names of the Package and it's ancestor packages.
     * The default value is false.
     */
    writeFullName?: boolean;
}

export enum ClassFeatures {
    None = 0,
    XmlDocSummary = 1 << 0,
    Generalizations = 1 << 1,
    InterfaceRealizations = 1 << 2,
    All = XmlDocSummary | Generalizations | InterfaceRealizations,
    AllExceptXmlDocs = Generalizations | InterfaceRealizations
}

export interface ClassOptions {
    /**
     * Defines the class features to write. The default is ClassFeatures.All.
     */
    features?: ClassFeatures;
    /**
     * Indicates if the "partial" prefix must be omitted. The default is false.
    */
    noPartial?: boolean;
    /**
     * Any additional interface names that the class should implement.
     */
    implements?: string[];
    /**
     * Any additional class names that the class should inherit from.
     */
    inherits?: string[];
}

export enum InterfaceFeatures {
    None = 0,
    XmlDocSummary = 1 << 0,
    Generalizations = 1 << 1,
    All = XmlDocSummary | Generalizations,
    AllExceptXmlDocs = Generalizations
}

export interface InterfaceOptions {
    /**
     * Defines the class features to write. The default is InterfaceFeatures.All.
     */
    features?: InterfaceFeatures;
    /**
     * Indicates if the "partial" prefix must be omitted. The default is false.
    */
    noPartial?: boolean;
    /**
    * Any additional interface names that the interface should inherit from.
    */
    inherits?: string[];
}

export enum EnumFeatures {
    None = 0,
    XmlDocSummary = 1 << 0,
    /**
     * Writes enumeration member initializers. This flag only applies when values are provided in the model.
     */
    Initializers = 1 << 1,
    All = XmlDocSummary | Initializers,
    AllExceptXmlDocs = Initializers
}

export enum EnumMemberFeatures {
    None = 0,
    XmlDocSummary = 1 << 0,
    /**
     * Writes enumeration member initializers. This flag only applies when values are provided in the model.
     */
    Initializers = 1 << 1,
    All = XmlDocSummary | Initializers,
    AllExceptXmlDocs = Initializers
}

export interface EnumOptions {
    features?: EnumFeatures;
}

export interface EnumMemberOptions {
    features?: EnumMemberFeatures;
}

export enum PropertyFeatures {
    None = 0,
    XmlDocSummary = 1 << 0,
    /**
     * The access modifier if the owner is not an Interface.
     */
    AccessModifier = 1 << 1,
    OptionalModifier = 1 << 2,
    All = XmlDocSummary | AccessModifier | OptionalModifier,
    AllExceptXmlDocs = AccessModifier | OptionalModifier
}

export interface PropertyOptions {
    /**
     * Defines the property features to write. The default is PropertyFeatures.All.
     */
    features?: PropertyFeatures;
    /**
    * Sets the collection type to be generated for the property in case it is multi-valued. The default value is ICollection.
    */
    collectionType?: CollectionType;
    /**
     * Indicates if the property should be made virtual. The default value is false. 
     */
    virtual?: boolean;
}

export enum MethodFeatures {
    None = 0,
    XmlDocSummary = 1 << 0,
    XmlDocParameters = 1 << 1,
    XmlDocReturns = 1 << 2,
    /**
    * The access modifier if the owner is not an Interface.
    */
    AccessModifier = 1 << 3,
    All = XmlDocSummary | XmlDocParameters | XmlDocReturns | AccessModifier,
    AllExceptXmlDocs = AccessModifier
}

export interface MethodOptions {
    /**
     * Sets the MethodFeatures. The default is MethodFeatures.All.
     */
    features?: MethodFeatures;
    /**
     * Sets the collection type to be generated for parameters in case they are multi-valued. The default is ICollection.
     */
    collectionType?: CollectionType;
    /**
     * Indicates if the method should be made virtual. The default value is false. 
     */
    virtual?: boolean;
}