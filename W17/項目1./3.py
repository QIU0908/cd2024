# NX 1872
# Journal created by 邱翼飛 on Fri Jun 14 21:02:36 2024 台北標準時間

#
import math
import NXOpen
import NXOpen.Assemblies
import NXOpen.Assemblies.ProductInterface
import NXOpen.PDM
import NXOpen.Positioning
import NXOpen.Preferences
def main() : 

    theSession  = NXOpen.Session.GetSession()
    workPart = theSession.Parts.Work
    displayPart = theSession.Parts.Display
    # ----------------------------------------------
    #   功能表：組立件(A)->元件(C)->新增元件(A)...
    # ----------------------------------------------
    markId1 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "起點")
    
    addComponentBuilder1 = workPart.AssemblyManager.CreateAddComponentBuilder()
    
    componentPositioner1 = workPart.ComponentAssembly.Positioner
    
    componentPositioner1.ClearNetwork()
    
    arrangement1 = workPart.ComponentAssembly.Arrangements.FindObject("Arrangement 1")
    componentPositioner1.PrimaryArrangement = arrangement1
    
    componentPositioner1.BeginAssemblyConstraints()
    
    allowInterpartPositioning1 = theSession.Preferences.Assemblies.InterpartPositioning
    
    expression1 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", NXOpen.Unit.Null)
    
    unit1 = workPart.UnitCollection.FindObject("MilliMeter")
    expression2 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression3 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    unit2 = workPart.UnitCollection.FindObject("Degrees")
    expression4 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    expression5 = workPart.Expressions.CreateSystemExpressionWithUnits("1", NXOpen.Unit.Null)
    
    expression6 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression7 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    expression8 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit2)
    
    network1 = componentPositioner1.EstablishNetwork()
    
    componentNetwork1 = network1
    componentNetwork1.MoveObjectsState = True
    
    componentNetwork1.DisplayComponent = NXOpen.Assemblies.Component.Null
    
    theSession.SetUndoMarkName(markId1, "新增元件 對話方塊")
    
    componentNetwork1.MoveObjectsState = True
    
    markId2 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "組立約束更新")
    
    addComponentBuilder1.SetComponentAnchor(NXOpen.Assemblies.ProductInterface.InterfaceObject.Null)
    
    addComponentBuilder1.SetInitialLocationType(NXOpen.Assemblies.AddComponentBuilder.LocationType.Snap)
    
    addComponentBuilder1.SetCount(1)
    
    addComponentBuilder1.SetScatterOption(True)
    
    addComponentBuilder1.ReferenceSet = "未知"
    
    addComponentBuilder1.Layer = -1
    
    basePart1, partLoadStatus1 = theSession.Parts.OpenBase("E:\\electroniccalculator\\2024\\2266\\model3 - 1.prt")
    
    partLoadStatus1.Dispose()
    addComponentBuilder1.ReferenceSet = "Use Model"
    
    addComponentBuilder1.Layer = -1
    
    partstouse1 = [NXOpen.BasePart.Null] * 1 
    part1 = basePart1
    partstouse1[0] = part1
    addComponentBuilder1.SetPartsToAdd(partstouse1)
    
    productinterfaceobjects1 = addComponentBuilder1.GetAllProductInterfaceObjects()
    
    addComponentBuilder1.OrientToWCS()
    
    coordinates1 = NXOpen.Point3d(-93.623250746185832, -95.451573639479165, 0.0)
    point1 = workPart.Points.CreatePoint(coordinates1)
    
    coordinates2 = NXOpen.Point3d(-93.623250746185832, -95.451573639479165, 0.0)
    point2 = workPart.Points.CreatePoint(coordinates2)
    
    origin1 = NXOpen.Point3d(-93.623250746185832, -95.451573639479165, 0.0)
    vector1 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    direction1 = workPart.Directions.CreateDirection(origin1, vector1, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    origin2 = NXOpen.Point3d(-93.623250746185832, -95.451573639479165, 0.0)
    vector2 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    direction2 = workPart.Directions.CreateDirection(origin2, vector2, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    xform1 = workPart.Xforms.CreateXformByPointXDirZDir(point2, direction2, direction1, NXOpen.SmartObject.UpdateOption.WithinModeling, 0.625)
    
    cartesianCoordinateSystem1 = workPart.CoordinateSystems.CreateCoordinateSystem(xform1, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    point3 = NXOpen.Point3d(-93.623250746185832, -95.451573639479165, 0.0)
    orientation1 = NXOpen.Matrix3x3()
    
    orientation1.Xx = 1.0
    orientation1.Xy = 0.0
    orientation1.Xz = 0.0
    orientation1.Yx = 0.0
    orientation1.Yy = 1.0
    orientation1.Yz = 0.0
    orientation1.Zx = 0.0
    orientation1.Zy = 0.0
    orientation1.Zz = 1.0
    addComponentBuilder1.SetInitialLocationAndOrientation(point3, orientation1)
    
    movableObjects1 = [NXOpen.NXObject.Null] * 1 
    component1 = workPart.ComponentAssembly.RootComponent.FindObject("COMPONENT model3 - 1 1")
    movableObjects1[0] = component1
    componentNetwork1.SetMovingGroup(movableObjects1)
    
    markId3 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "新增元件")
    
    markId4 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "AddComponent on_apply")
    
    componentNetwork1.Solve()
    
    componentPositioner1.ClearNetwork()
    
    nErrs1 = theSession.UpdateManager.AddToDeleteList(componentNetwork1)
    
    nErrs2 = theSession.UpdateManager.DoUpdate(markId2)
    
    componentPositioner1.EndAssemblyConstraints()
    
    logicalobjects1 = addComponentBuilder1.GetLogicalObjectsHavingUnassignedRequiredAttributes()
    
    addComponentBuilder1.ComponentName = "MODEL3 - 1"
    
    nXObject1 = addComponentBuilder1.Commit()
    
    errorList1 = addComponentBuilder1.GetOperationFailures()
    
    errorList1.Dispose()
    theSession.DeleteUndoMark(markId3, None)
    
    theSession.SetUndoMarkName(markId1, "新增元件")
    
    addComponentBuilder1.Destroy()
    
    workPart.Points.DeletePoint(point1)
    
    componentPositioner1.PrimaryArrangement = NXOpen.Assemblies.Arrangement.Null
    
    theSession.DeleteUndoMark(markId2, None)
    
    markId5 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    addComponentBuilder2 = workPart.AssemblyManager.CreateAddComponentBuilder()
    
    componentPositioner2 = workPart.ComponentAssembly.Positioner
    
    componentPositioner2.ClearNetwork()
    
    componentPositioner2.PrimaryArrangement = arrangement1
    
    componentPositioner2.BeginAssemblyConstraints()
    
    allowInterpartPositioning2 = theSession.Preferences.Assemblies.InterpartPositioning
    
    expression9 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", NXOpen.Unit.Null)
    
    expression10 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression11 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression12 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    expression13 = workPart.Expressions.CreateSystemExpressionWithUnits("1", NXOpen.Unit.Null)
    
    expression14 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression15 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    expression16 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit2)
    
    network2 = componentPositioner2.EstablishNetwork()
    
    componentNetwork2 = network2
    componentNetwork2.MoveObjectsState = True
    
    componentNetwork2.DisplayComponent = NXOpen.Assemblies.Component.Null
    
    theSession.SetUndoMarkName(markId5, "新增元件 對話方塊")
    
    componentNetwork2.MoveObjectsState = True
    
    markId6 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "組立約束更新")
    
    addComponentBuilder2.SetComponentAnchor(NXOpen.Assemblies.ProductInterface.InterfaceObject.Null)
    
    addComponentBuilder2.SetInitialLocationType(NXOpen.Assemblies.AddComponentBuilder.LocationType.Snap)
    
    addComponentBuilder2.SetCount(1)
    
    addComponentBuilder2.SetScatterOption(True)
    
    addComponentBuilder2.ReferenceSet = "未知"
    
    addComponentBuilder2.Layer = -1
    
    # ----------------------------------------------
    #   對話開始 新增元件
    # ----------------------------------------------
    componentPositioner2.ClearNetwork()
    
    addComponentBuilder2.RemoveAddedComponents()
    
    addComponentBuilder2.Destroy()
    
    componentPositioner2.PrimaryArrangement = NXOpen.Assemblies.Arrangement.Null
    
    componentPositioner2.EndAssemblyConstraints()
    
    theSession.DeleteUndoMark(markId6, None)
    
    theSession.UndoToMark(markId5, None)
    
    theSession.DeleteUndoMark(markId5, None)
    
    # ----------------------------------------------
    #   功能表：組立件(A)->元件位置(P)->組立約束(N)...
    # ----------------------------------------------
    markId7 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "通過定位任務建立約束")
    
    markId8 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "起點")
    
    componentPositioner3 = workPart.ComponentAssembly.Positioner
    
    componentPositioner3.ClearNetwork()
    
    componentPositioner3.PrimaryArrangement = arrangement1
    
    componentPositioner3.BeginAssemblyConstraints()
    
    allowInterpartPositioning3 = theSession.Preferences.Assemblies.InterpartPositioning
    
    expression17 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", NXOpen.Unit.Null)
    
    expression18 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression19 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression20 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    expression21 = workPart.Expressions.CreateSystemExpressionWithUnits("1", NXOpen.Unit.Null)
    
    expression22 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression23 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    expression24 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit2)
    
    network3 = componentPositioner3.EstablishNetwork()
    
    componentNetwork3 = network3
    componentNetwork3.MoveObjectsState = True
    
    componentNetwork3.DisplayComponent = NXOpen.Assemblies.Component.Null
    
    componentNetwork3.NetworkArrangementsMode = NXOpen.Positioning.ComponentNetwork.ArrangementsMode.Existing
    
    theSession.SetUndoMarkName(markId8, "組立約束 對話方塊")
    
    componentNetwork3.MoveObjectsState = True
    
    componentNetwork3.NetworkArrangementsMode = NXOpen.Positioning.ComponentNetwork.ArrangementsMode.Existing
    
    markId9 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Assembly Constraints Update")
    
    component2 = nXObject1
    face1 = component2.FindObject("PROTO#.Features|EXTRUDE(2)|FACE 150 {(0,-4,-7.5) EXTRUDE(2)}")
    line1 = workPart.Lines.CreateFaceAxis(face1, NXOpen.SmartObject.UpdateOption.AfterModeling)
    
    objects1 = [NXOpen.TaggedObject.Null] * 1 
    objects1[0] = line1
    nErrs3 = theSession.UpdateManager.AddObjectsToDeleteList(objects1)
    
    component3 = workPart.ComponentAssembly.RootComponent.FindObject("COMPONENT model4 - 1 1")
    face2 = component3.FindObject("PROTO#.Features|EXTRUDE(2)|FACE 140 {(0,-10,-7.5000000000003) EXTRUDE(2)}")
    line2 = workPart.Lines.CreateFaceAxis(face2, NXOpen.SmartObject.UpdateOption.AfterModeling)
    
    markId10 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Create Constraint")
    
    constraint1 = componentPositioner3.CreateConstraint(True)
    
    componentConstraint1 = constraint1
    componentConstraint1.ConstraintType = NXOpen.Positioning.Constraint.Type.Concentric
    
    edge1 = component2.FindObject("PROTO#.Features|EXTRUDE(2)|EDGE * 130 * 150 {(-3.75,-8,-6.4951905283833)(7.5,-8,0)(-3.75,-8,6.4951905283833) EXTRUDE(2)}")
    constraintReference1 = componentConstraint1.CreateConstraintReference(component2, edge1, False, False, False)
    
    helpPoint1 = NXOpen.Point3d(-98.556003879256011, -103.45157363947915, -5.6495970235218049)
    constraintReference1.HelpPoint = helpPoint1
    
    edge2 = component3.FindObject("PROTO#.Features|EXTRUDE(2)|EDGE * 130 * 140 {(-3.7500000000002,-20,-6.4951905283836)(7.5000000000003,-20,0)(-3.7500000000002,-20,6.4951905283836) EXTRUDE(2)}")
    constraintReference2 = componentConstraint1.CreateConstraintReference(component3, edge2, False, False, False)
    
    helpPoint2 = NXOpen.Point3d(-47.247685877664608, 34.360743030989561, 5.5163672354125826)
    constraintReference2.HelpPoint = helpPoint2
    
    constraintReference2.SetFixHint(True)
    
    objects2 = [NXOpen.TaggedObject.Null] * 1 
    objects2[0] = line2
    nErrs4 = theSession.UpdateManager.AddObjectsToDeleteList(objects2)
    
    componentNetwork3.Solve()
    
    markId11 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "組立約束")
    
    nErrs5 = theSession.UpdateManager.DoUpdate(markId9)
    
    componentNetwork3.Solve()
    
    componentPositioner3.ClearNetwork()
    
    nErrs6 = theSession.UpdateManager.AddToDeleteList(componentNetwork3)
    
    componentPositioner3.DeleteNonPersistentConstraints()
    
    nErrs7 = theSession.UpdateManager.DoUpdate(markId9)
    
    theSession.DeleteUndoMark(markId11, None)
    
    theSession.SetUndoMarkName(markId8, "組立約束")
    
    componentPositioner3.PrimaryArrangement = NXOpen.Assemblies.Arrangement.Null
    
    componentPositioner3.EndAssemblyConstraints()
    
    theSession.DeleteUndoMark(markId9, None)
    
    theSession.DeleteUndoMark(markId10, None)
    
    markId12 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    componentPositioner4 = workPart.ComponentAssembly.Positioner
    
    componentPositioner4.ClearNetwork()
    
    componentPositioner4.PrimaryArrangement = arrangement1
    
    componentPositioner4.BeginAssemblyConstraints()
    
    allowInterpartPositioning4 = theSession.Preferences.Assemblies.InterpartPositioning
    
    expression25 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", NXOpen.Unit.Null)
    
    expression26 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression27 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression28 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    expression29 = workPart.Expressions.CreateSystemExpressionWithUnits("1", NXOpen.Unit.Null)
    
    expression30 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression31 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    expression32 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit2)
    
    network4 = componentPositioner4.EstablishNetwork()
    
    componentNetwork4 = network4
    componentNetwork4.MoveObjectsState = True
    
    componentNetwork4.DisplayComponent = NXOpen.Assemblies.Component.Null
    
    componentNetwork4.NetworkArrangementsMode = NXOpen.Positioning.ComponentNetwork.ArrangementsMode.Existing
    
    theSession.SetUndoMarkName(markId12, "組立約束 對話方塊")
    
    componentNetwork4.MoveObjectsState = True
    
    componentNetwork4.NetworkArrangementsMode = NXOpen.Positioning.ComponentNetwork.ArrangementsMode.Existing
    
    markId13 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Assembly Constraints Update")
    
    # ----------------------------------------------
    #   對話開始 組立約束
    # ----------------------------------------------
    componentPositioner4.PrimaryArrangement = NXOpen.Assemblies.Arrangement.Null
    
    componentPositioner4.EndAssemblyConstraints()
    
    theSession.DeleteUndoMark(markId13, None)
    
    theSession.UndoToMark(markId12, None)
    
    theSession.DeleteUndoMark(markId12, None)
    
    theSession.DeleteUndoMark(markId7, None)
    
    # ----------------------------------------------
    #   功能表：工具(T)->預測指令(P)->1 停止動作記錄錄製
    # ----------------------------------------------
    # ----------------------------------------------
    #   功能表：工具(T)->動作記錄(J)->停止錄製(S)
    # ----------------------------------------------
    
if __name__ == '__main__':
    main()